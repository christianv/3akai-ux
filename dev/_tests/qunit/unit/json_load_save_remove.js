module("JSON - load / save & remove");

var testJSON = {
    "boolean": true,
    "integer": 1,
    "string": "value",
    "array_empty": [],
    "array_object": [{
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    }, {
        "key4": "value4",
        "key5": "value5",
        "key6": "value6"
    }, {
        "key7": "value7"
    }, {
        "key8": [{
            "key9": "value9",
            "key10": "value10"
        }, {
            "key11": "value11",
            "key12": "value12"
        }, {
            "key13": "value13",
            "key14": [{
                "key15": "value15",
                "key16": "value16"
            }]
        }]
    }],
    "array_string": ["value1", "value2", "value3", "value4", "value5"],
    "array_int": [1, 2, 3, 4, 5],
    "array_boolean": [true, false, true, true, false]
};
var testURL = "/_user/a/ad/admin/public/test.json";

asyncTest("Save a JSON file", function(){

    var saveCallback = function(){
        ok(true);
        start();
    };

    // Login
    $.ajax({
        url: "/system/sling/formlogin",
        type: "POST",
        data: {
            "sakaiauth:login": 1,
            "sakaiauth:pw": "admin",
            "sakaiauth:un": "admin",
            "_charset_": "utf-8"
        },
        success: function(){
            // We need to copy the testJSON in order to make sure we don't modify it inside this function
            sakai.api.Server.saveJSON(testURL, $.extend("true", [], testJSON), saveCallback);
        },
        error: function(){
            ok(false);
            start();
        }
    });
});

asyncTest("Load a JSON file", function(){

    var loadCallback = function(success, data){
        same(data, testJSON, "The saved JSON is the same as the loaded JSON");
        start();
    };

    // Login
    $.ajax({
        url: "/system/sling/formlogin",
        type: "POST",
        data: {
            "sakaiauth:login": 1,
            "sakaiauth:pw": "admin",
            "sakaiauth:un": "admin",
            "_charset_": "utf-8"
        },
        success: function(){
            sakai.api.Server.loadJSON(testURL, loadCallback);
        },
        error: function(){
            ok(false);
            start();
        }
    });
});

asyncTest("Remove a JSON file", function(){

    var removeCallback = function(success, data){
        //same(data, testJSON, "The saved JSON is the same as the loaded JSON");
        ok(true);
        start();
    };

    // Login
    $.ajax({
        url: "/system/sling/formlogin",
        type: "POST",
        data: {
            "sakaiauth:login": 1,
            "sakaiauth:pw": "admin",
            "sakaiauth:un": "admin",
            "_charset_": "utf-8"
        },
        success: function(){
            sakai.api.Server.removeJSON(testURL, removeCallback);
        },
        error: function(){
            ok(false);
            start();
        }
    });
});