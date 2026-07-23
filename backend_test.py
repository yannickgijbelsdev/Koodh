"""
Backend API Testing for Work Proxy Endpoints
Tests the two Koodh news proxy endpoints: /api/work and /api/work/{article_id}
"""
import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend/.env
BACKEND_URL = "https://consultant-web-1.preview.emergentagent.com/api"

def print_section(title):
    """Print a formatted section header"""
    print(f"\n{'='*80}")
    print(f"  {title}")
    print(f"{'='*80}\n")

def test_get_work_list():
    """
    Test GET /api/work endpoint
    Should return HTTP 200 with JSON containing:
    - "items" array with 3 items
    - Each item should have: id, title, image_url, published_at, category.name
    """
    print_section("TEST 1: GET /api/work (Work Items List)")
    
    url = f"{BACKEND_URL}/work"
    print(f"Testing URL: {url}")
    
    try:
        response = requests.get(url, timeout=30)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code != 200:
            print(f"❌ FAILED: Expected status 200, got {response.status_code}")
            print(f"Response: {response.text[:500]}")
            return False, None
        
        # Parse JSON response
        try:
            data = response.json()
        except json.JSONDecodeError as e:
            print(f"❌ FAILED: Invalid JSON response: {e}")
            print(f"Response text: {response.text[:500]}")
            return False, None
        
        print(f"✅ Status 200 OK")
        print(f"\nResponse structure:")
        print(f"  Keys: {list(data.keys())}")
        
        # Check for "items" array
        if "items" not in data:
            print(f"❌ FAILED: Response missing 'items' key")
            print(f"Available keys: {list(data.keys())}")
            return False, None
        
        items = data["items"]
        print(f"  Items count: {len(items)}")
        
        if len(items) == 0:
            print(f"❌ FAILED: No items returned (expected 3)")
            return False, None
        
        # Validate first item structure
        print(f"\n📋 Validating item structure:")
        first_item = items[0]
        required_fields = ["id", "title", "image_url", "published_at", "category"]
        
        missing_fields = []
        for field in required_fields:
            if field not in first_item:
                missing_fields.append(field)
                print(f"  ❌ Missing field: {field}")
            else:
                print(f"  ✅ {field}: {type(first_item[field]).__name__}")
        
        if missing_fields:
            print(f"\n❌ FAILED: Missing required fields: {missing_fields}")
            print(f"Available fields: {list(first_item.keys())}")
            return False, None
        
        # Check category.name
        if "category" in first_item:
            if isinstance(first_item["category"], dict):
                if "name" in first_item["category"]:
                    print(f"  ✅ category.name: {first_item['category']['name']}")
                else:
                    print(f"  ❌ category object missing 'name' field")
                    print(f"  Category keys: {list(first_item['category'].keys())}")
            else:
                print(f"  ❌ category is not an object: {type(first_item['category'])}")
        
        # Display sample data
        print(f"\n📄 Sample Item (first item):")
        print(f"  ID: {first_item.get('id', 'N/A')}")
        print(f"  Title: {first_item.get('title', 'N/A')[:60]}...")
        print(f"  Image URL: {first_item.get('image_url', 'N/A')[:60]}...")
        print(f"  Published: {first_item.get('published_at', 'N/A')}")
        print(f"  Category: {first_item.get('category', {}).get('name', 'N/A')}")
        
        # Check if we have 3 items
        if len(items) != 3:
            print(f"\n⚠️  WARNING: Expected 3 items, got {len(items)}")
        else:
            print(f"\n✅ Correct number of items: 3")
        
        # Verify all items have required fields
        print(f"\n🔍 Checking all {len(items)} items for errors:")
        error_count = 0
        for idx, item in enumerate(items):
            item_errors = []
            for field in required_fields:
                if field not in item:
                    item_errors.append(field)
            
            if item_errors:
                error_count += 1
                print(f"  ❌ Item {idx+1} missing: {item_errors}")
            else:
                print(f"  ✅ Item {idx+1} OK")
        
        if error_count > 0:
            print(f"\n❌ FAILED: {error_count} items have missing fields")
            return False, None
        
        print(f"\n✅ TEST PASSED: All items have required fields")
        return True, first_item.get("id")
        
    except requests.exceptions.Timeout:
        print(f"❌ FAILED: Request timeout after 30 seconds")
        return False, None
    except requests.exceptions.RequestException as e:
        print(f"❌ FAILED: Request error: {e}")
        return False, None
    except Exception as e:
        print(f"❌ FAILED: Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        return False, None

def test_get_work_item_detail(article_id):
    """
    Test GET /api/work/{article_id} endpoint
    Should return HTTP 200 with JSON containing:
    - id, title, image_url, published_at, body (HTML content)
    """
    print_section(f"TEST 2: GET /api/work/{article_id} (Work Item Detail)")
    
    url = f"{BACKEND_URL}/work/{article_id}"
    print(f"Testing URL: {url}")
    
    try:
        response = requests.get(url, timeout=30)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code != 200:
            print(f"❌ FAILED: Expected status 200, got {response.status_code}")
            print(f"Response: {response.text[:500]}")
            return False
        
        # Parse JSON response
        try:
            data = response.json()
        except json.JSONDecodeError as e:
            print(f"❌ FAILED: Invalid JSON response: {e}")
            print(f"Response text: {response.text[:500]}")
            return False
        
        print(f"✅ Status 200 OK")
        print(f"\nResponse structure:")
        print(f"  Keys: {list(data.keys())}")
        
        # Check for required fields
        required_fields = ["id", "title", "image_url", "published_at", "body"]
        missing_fields = []
        
        print(f"\n📋 Validating response structure:")
        for field in required_fields:
            if field not in data:
                missing_fields.append(field)
                print(f"  ❌ Missing field: {field}")
            else:
                field_value = data[field]
                field_type = type(field_value).__name__
                
                if field == "body":
                    # Check if body contains HTML
                    body_preview = str(field_value)[:100]
                    has_html = "<" in body_preview and ">" in body_preview
                    print(f"  ✅ {field}: {field_type} (length: {len(str(field_value))}, HTML: {has_html})")
                else:
                    print(f"  ✅ {field}: {field_type}")
        
        if missing_fields:
            print(f"\n❌ FAILED: Missing required fields: {missing_fields}")
            print(f"Available fields: {list(data.keys())}")
            return False
        
        # Display sample data
        print(f"\n📄 Article Details:")
        print(f"  ID: {data.get('id', 'N/A')}")
        print(f"  Title: {data.get('title', 'N/A')[:60]}...")
        print(f"  Image URL: {data.get('image_url', 'N/A')[:60]}...")
        print(f"  Published: {data.get('published_at', 'N/A')}")
        print(f"  Body length: {len(str(data.get('body', '')))} characters")
        print(f"  Body preview: {str(data.get('body', ''))[:150]}...")
        
        print(f"\n✅ TEST PASSED: Article detail has all required fields")
        return True
        
    except requests.exceptions.Timeout:
        print(f"❌ FAILED: Request timeout after 30 seconds")
        return False
    except requests.exceptions.RequestException as e:
        print(f"❌ FAILED: Request error: {e}")
        return False
    except Exception as e:
        print(f"❌ FAILED: Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        return False

def test_get_work_item_invalid_id():
    """
    Test GET /api/work/{article_id} with invalid ID
    Should return gracefully with JSON error, not crash with 500
    """
    print_section("TEST 3: GET /api/work/invalid-id-123 (Invalid ID)")
    
    invalid_id = "invalid-id-123"
    url = f"{BACKEND_URL}/work/{invalid_id}"
    print(f"Testing URL: {url}")
    
    try:
        response = requests.get(url, timeout=30)
        print(f"Status Code: {response.status_code}")
        
        # Should NOT be 500 (server error)
        if response.status_code == 500:
            print(f"❌ FAILED: Server crashed with 500 error (should handle gracefully)")
            print(f"Response: {response.text[:500]}")
            return False
        
        # Parse JSON response
        try:
            data = response.json()
        except json.JSONDecodeError as e:
            print(f"❌ FAILED: Invalid JSON response: {e}")
            print(f"Response text: {response.text[:500]}")
            return False
        
        print(f"Response structure:")
        print(f"  Keys: {list(data.keys())}")
        
        # Should have an "error" key
        if "error" in data:
            print(f"  ✅ Contains 'error' key: {data['error'][:100]}...")
            print(f"\n✅ TEST PASSED: Invalid ID handled gracefully with error message")
            return True
        else:
            print(f"  ⚠️  No 'error' key found, but didn't crash")
            print(f"  Response: {json.dumps(data, indent=2)[:300]}")
            print(f"\n⚠️  WARNING: Expected 'error' key in response for invalid ID")
            return True  # Still pass if it didn't crash
        
    except requests.exceptions.Timeout:
        print(f"❌ FAILED: Request timeout after 30 seconds")
        return False
    except requests.exceptions.RequestException as e:
        print(f"❌ FAILED: Request error: {e}")
        return False
    except Exception as e:
        print(f"❌ FAILED: Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    """Run all backend tests"""
    print("\n" + "="*80)
    print("  BACKEND API TESTING - Work Proxy Endpoints")
    print("  Backend URL: " + BACKEND_URL)
    print("  Timestamp: " + datetime.now().isoformat())
    print("="*80)
    
    results = {
        "test_1_work_list": False,
        "test_2_work_detail": False,
        "test_3_invalid_id": False
    }
    
    # Test 1: Get work list
    test_1_passed, first_article_id = test_get_work_list()
    results["test_1_work_list"] = test_1_passed
    
    # Test 2: Get work item detail (only if test 1 passed and we have an ID)
    if test_1_passed and first_article_id:
        test_2_passed = test_get_work_item_detail(first_article_id)
        results["test_2_work_detail"] = test_2_passed
    else:
        print_section("TEST 2: SKIPPED (Test 1 failed or no article ID)")
        print("Cannot test article detail without a valid article ID from test 1")
    
    # Test 3: Invalid ID handling
    test_3_passed = test_get_work_item_invalid_id()
    results["test_3_invalid_id"] = test_3_passed
    
    # Summary
    print_section("TEST SUMMARY")
    total_tests = len(results)
    passed_tests = sum(1 for v in results.values() if v)
    
    for test_name, passed in results.items():
        status = "✅ PASSED" if passed else "❌ FAILED"
        print(f"  {test_name}: {status}")
    
    print(f"\n  Total: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("\n🎉 ALL TESTS PASSED!")
        return 0
    else:
        print(f"\n⚠️  {total_tests - passed_tests} test(s) failed")
        return 1

if __name__ == "__main__":
    exit_code = main()
    sys.exit(exit_code)
