export default {
  "error": false,
  "errorMessage": null,
  "errorInstanceId": null,
  "errorKey": null,
  "keyedErrors": [],
  "results": {
    "940988": {
      "error": false,
      "errorMessage": null,
      "errorInstanceId": null,
      "errorKey": null,
      "keyedErrors": [],
      "searchQueryId": "26D2F3A40E18D2C5",
      "parseQueryResult": {
        "error": false,
        "errorMessage": null,
        "errorInstanceId": null,
        "errorKey": null,
        "keyedErrors": [],
        "errorIndex": -1,
        "parsedSubstring": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| count by latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code\n| sort _count",
        "runnableQuery": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| count by latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code\n| sort _count",
        "userReferencedFieldsSortable": true,
        "pendingErrorObjects": [],
        "parameterErrors": [],
        "aggregation": true,
        "summary": false,
        "sortable": true
      },
      "shortCode": null,
      "startMillis": 1517571420754,
      "endMillis": 1517575020754
    },
    "940989": {
      "error": false,
      "errorMessage": null,
      "errorInstanceId": null,
      "errorKey": null,
      "keyedErrors": [],
      "searchQueryId": "1C523FBA911E73D3",
      "parseQueryResult": {
        "error": false,
        "errorMessage": null,
        "errorInstanceId": null,
        "errorKey": null,
        "keyedErrors": [],
        "errorIndex": -1,
        "parsedSubstring": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| where country_name = \"United States\" \n| count by latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code",
        "runnableQuery": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| where country_name = \"United States\" \n| count by latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code",
        "userReferencedFieldsSortable": true,
        "pendingErrorObjects": [],
        "parameterErrors": [],
        "aggregation": true,
        "summary": false,
        "sortable": true
      },
      "shortCode": null,
      "startMillis": 1517571420803,
      "endMillis": 1517575020803
    },
    "940986": {
      "error": false,
      "errorMessage": null,
      "errorInstanceId": null,
      "errorKey": null,
      "keyedErrors": [],
      "searchQueryId": "680442F4224B6442",
      "parseQueryResult": {
        "error": false,
        "errorMessage": null,
        "errorInstanceId": null,
        "errorKey": null,
        "keyedErrors": [],
        "errorIndex": -1,
        "parsedSubstring": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| where !isNull(country_name) and country_name != \"\"\n| timeslice 5m\n| count by _timeslice,country_name\n| transpose row _timeslice column country_name as * ",
        "runnableQuery": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| where !isNull(country_name) and country_name != \"\"\n| timeslice 5m\n| count by _timeslice,country_name\n| transpose row _timeslice column country_name as * ",
        "userReferencedFieldsSortable": true,
        "pendingErrorObjects": [],
        "parameterErrors": [],
        "aggregation": true,
        "summary": false,
        "sortable": false
      },
      "shortCode": null,
      "startMillis": 1517571420857,
      "endMillis": 1517575020857
    },
    "940987": {
      "error": false,
      "errorMessage": null,
      "errorInstanceId": null,
      "errorKey": null,
      "keyedErrors": [],
      "searchQueryId": "348D0CC77D080B66",
      "parseQueryResult": {
        "error": false,
        "errorMessage": null,
        "errorInstanceId": null,
        "errorKey": null,
        "keyedErrors": [],
        "errorIndex": -1,
        "parsedSubstring": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| timeslice 5m\n| where country_name = \"United States\" AND !isNull(region) AND region != \"\"\n| count by _timeslice, region\n| transpose row _timeslice column region as * ",
        "runnableQuery": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| timeslice 5m\n| where country_name = \"United States\" AND !isNull(region) AND region != \"\"\n| count by _timeslice, region\n| transpose row _timeslice column region as * ",
        "userReferencedFieldsSortable": true,
        "pendingErrorObjects": [],
        "parameterErrors": [],
        "aggregation": true,
        "summary": false,
        "sortable": false
      },
      "shortCode": null,
      "startMillis": 1517571420899,
      "endMillis": 1517575020899
    }
  }
}
