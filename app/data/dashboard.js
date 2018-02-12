export default {
  "error": false,
    "errorMessage": null,
      "errorInstanceId": null,
        "errorKey": null,
          "keyedErrors": [],
            "report": {
    "id": 95320061,
      "title": "Apache - Visitor Locations",
        "description": "",
          "columns": [],
            "detailLevel": 2,
              "properties": "{\"showColumnTitles\":true,\"layoutType\":\"gridster\",\"colorFamily\":3}",
                "fields": [
                  {
                    "name": "status_code",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "city",
                    "type": "string",
                    "key": true,
                    "userReferenced": true
                  },
                  {
                    "name": "_sourcecategory",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "metro_code",
                    "type": "int",
                    "key": true,
                    "userReferenced": true
                  },
                  {
                    "name": "_index",
                    "type": "string",
                    "key": false,
                    "userReferenced": false
                  },
                  {
                    "name": "_sourcename",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "_sourcehost",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "country_name",
                    "type": "string",
                    "key": true,
                    "userReferenced": true
                  },
                  {
                    "name": "_collector",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "_count",
                    "type": "int",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "area_code",
                    "type": "int",
                    "key": true,
                    "userReferenced": true
                  },
                  {
                    "name": "region",
                    "type": "string",
                    "key": true,
                    "userReferenced": true
                  },
                  {
                    "name": "referrer",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "country_code",
                    "type": "string",
                    "key": true,
                    "userReferenced": true
                  },
                  {
                    "name": "user_agent",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "__timeslice_end",
                    "type": "long",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "src_ip",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "size",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "method",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "url",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "latitude",
                    "type": "double",
                    "key": true,
                    "userReferenced": true
                  },
                  {
                    "name": "_source",
                    "type": "string",
                    "key": false,
                    "userReferenced": true
                  },
                  {
                    "name": "longitude",
                    "type": "double",
                    "key": true,
                    "userReferenced": true
                  },
                  {
                    "name": "postal_code",
                    "type": "string",
                    "key": true,
                    "userReferenced": true
                  }
                ],
                  "isLive": false,
                    "modeState": "interactive",
                      "isMetricsTab": false
  },
  "panels": [
    {
      "id": 940986,
      "parentId": 95320061,
      "title": "Visits by Country Over TimeVisits by Country Over Time",
      "viewerType": "column",
      "detailLevel": 2,
      "queryString": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| where !isNull(country_name) and country_name != \"\"\n| timeslice 5m\n| count by _timeslice,country_name\n| transpose row _timeslice column country_name as * ",
      "timeRange": "[{\"t\":\"relative\",\"d\":-3600000}]",
      "x": 1,
      "y": 7,
      "width": 12,
      "height": 5,
      "properties": "{\"version\":3,\"settings\":{\"table\":{\"version\":2,\"configuration\":{\"textTruncationMode\":\"none\",\"fontSize\":\"medium\",\"fontSizeOverride\":null}},\"bar\":{\"chartType\":\"bar\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"column\":{\"chartType\":\"column\",\"version\":2,\"configuration\":{\"colors\":{\"index\":\"2\",\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":\"normal\",\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"line\":{\"chartType\":\"line\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"area\":{\"chartType\":\"area\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":[{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null}],\"seriesInfo\":{}}},\"pie\":{\"chartType\":\"pie\",\"version\":3,\"configuration\":{\"donutMode\":true,\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"label\":{\"truncationMode\":\"middle\"},\"showSliceBorders\":true,\"maxNumOfPieSlices\":\"10\"}}},\"boxplot\":{\"chartType\":\"boxplot\",\"version\":1,\"configuration\":{\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"min\":null,\"max\":null}}},\"map\":{\"version\":1,\"configuration\":{}},\"svv\":{\"version\":2,\"configuration\":{\"colorOverride\":null,\"backgroundColorEnabled\":false,\"noDataBehavior\":{\"enabled\":false,\"color\":\"#cccccc\",\"value\":null,\"isString\":null},\"valueType\":{\"number\":{\"showNumber\":true,\"unit\":null,\"colorsByValueRange\":null},\"boolean\":{\"trueColor\":\"#6aa84f\",\"falseColor\":\"#cc0000\"}},\"labels\":{\"prefix\":{\"enabled\":false,\"text\":\"\",\"align\":\"left\"},\"postfix\":{\"enabled\":false,\"text\":\"\",\"align\":\"right\"}}}},\"sankey\":{\"version\":1,\"configuration\":{}},\"text\":{\"version\":1,\"configuration\":{\"text\":null}},\"metrics\":{\"version\":2,\"configuration\":{\"blockSettings\":{},\"viewType\":\"timeline\",\"zoom\":\"xy\",\"yAxis\":{\"defaults\":[{\"name\":\"\"},{\"name\":\"\"}],\"custom\":[{},{}]},\"xAxis\":{\"scrubber\":true},\"outliers\":{\"type\":1,\"top\":10,\"scope\":0,\"cyclicality\":false,\"sensitivity\":3},\"colorFamily\":\"METRIC_DEFAULT\"}},\"common\":{\"version\":1,\"configuration\":{\"drilldown\":{\"fallback\":{\"target\":{\"id\":null,\"name\":null,\"enabled\":null}}}}}}}",
      "isDisabled": false,
      "optimizationStatus": "Unoptimized",
      "fields": [
        {
          "name": "status_code",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_sourcecategory",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_index",
          "type": "string",
          "key": false,
          "userReferenced": false
        },
        {
          "name": "metro_code",
          "type": "int",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_sourcename",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_sourcehost",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "country_name",
          "type": "string",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "_collector",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "longitude",
          "type": "double",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "latitude",
          "type": "double",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "region",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "referrer",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "user_agent",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "__timeslice_end",
          "type": "long",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "postal_code",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "country_code",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "src_ip",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "city",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "size",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "method",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "area_code",
          "type": "int",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "url",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_source",
          "type": "string",
          "key": false,
          "userReferenced": true
        }
      ],
      "metricsQueries": [],
      "caller": "search",
      "desiredQuantizationInSecs": 0,
      "parameters": []
    },
    {
      "id": 940987,
      "parentId": 95320061,
      "title": "Visits by US State Over Time",
      "viewerType": "column",
      "detailLevel": 2,
      "queryString": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| timeslice 5m\n| where country_name = \"United States\" AND !isNull(region) AND region != \"\"\n| count by _timeslice, region\n| transpose row _timeslice column region as * ",
      "timeRange": "[{\"t\":\"relative\",\"d\":-3600000}]",
      "x": 13,
      "y": 7,
      "width": 12,
      "height": 5,
      "properties": "{\"version\":3,\"settings\":{\"table\":{\"version\":2,\"configuration\":{\"textTruncationMode\":\"none\",\"fontSize\":\"medium\",\"fontSizeOverride\":null}},\"bar\":{\"chartType\":\"bar\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"column\":{\"chartType\":\"column\",\"version\":2,\"configuration\":{\"colors\":{\"index\":\"2\",\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":\"normal\",\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"line\":{\"chartType\":\"line\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"area\":{\"chartType\":\"area\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":[{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null}],\"seriesInfo\":{}}},\"pie\":{\"chartType\":\"pie\",\"version\":3,\"configuration\":{\"donutMode\":true,\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"label\":{\"truncationMode\":\"middle\"},\"showSliceBorders\":true,\"maxNumOfPieSlices\":\"10\"}}},\"boxplot\":{\"chartType\":\"boxplot\",\"version\":1,\"configuration\":{\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"min\":null,\"max\":null}}},\"map\":{\"version\":1,\"configuration\":{}},\"svv\":{\"version\":2,\"configuration\":{\"colorOverride\":null,\"backgroundColorEnabled\":false,\"noDataBehavior\":{\"enabled\":false,\"color\":\"#cccccc\",\"value\":null,\"isString\":null},\"valueType\":{\"number\":{\"showNumber\":true,\"unit\":null,\"colorsByValueRange\":null},\"boolean\":{\"trueColor\":\"#6aa84f\",\"falseColor\":\"#cc0000\"}},\"labels\":{\"prefix\":{\"enabled\":false,\"text\":\"\",\"align\":\"left\"},\"postfix\":{\"enabled\":false,\"text\":\"\",\"align\":\"right\"}}}},\"sankey\":{\"version\":1,\"configuration\":{}},\"text\":{\"version\":1,\"configuration\":{\"text\":null}},\"metrics\":{\"version\":2,\"configuration\":{\"blockSettings\":{},\"viewType\":\"timeline\",\"zoom\":\"xy\",\"yAxis\":{\"defaults\":[{\"name\":\"\"},{\"name\":\"\"}],\"custom\":[{},{}]},\"xAxis\":{\"scrubber\":true},\"outliers\":{\"type\":1,\"top\":10,\"scope\":0,\"cyclicality\":false,\"sensitivity\":3},\"colorFamily\":\"METRIC_DEFAULT\"}},\"common\":{\"version\":1,\"configuration\":{\"drilldown\":{\"fallback\":{\"target\":{\"id\":null,\"name\":null,\"enabled\":null}}}}}}}",
      "isDisabled": false,
      "optimizationStatus": "Unoptimized",
      "fields": [
        {
          "name": "status_code",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_sourcecategory",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_index",
          "type": "string",
          "key": false,
          "userReferenced": false
        },
        {
          "name": "metro_code",
          "type": "int",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_sourcename",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_sourcehost",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_collector",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "longitude",
          "type": "double",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "latitude",
          "type": "double",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "region",
          "type": "string",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "referrer",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "country_name",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "user_agent",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "__timeslice_end",
          "type": "long",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "postal_code",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "country_code",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "src_ip",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "city",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "size",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "method",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "area_code",
          "type": "int",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "url",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_source",
          "type": "string",
          "key": false,
          "userReferenced": true
        }
      ],
      "metricsQueries": [],
      "caller": "search",
      "desiredQuantizationInSecs": 0,
      "parameters": []
    },
    {
      "id": 940988,
      "parentId": 95320061,
      "title": "Worldwide",
      "viewerType": "map",
      "detailLevel": 2,
      "queryString": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| count by latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code\n| sort _count",
      "timeRange": "[{\"t\":\"relative\",\"d\":-3600000}]",
      "x": 1,
      "y": 1,
      "width": 12,
      "height": 6,
      "properties": "{\"version\":3,\"settings\":{\"table\":{\"version\":2,\"configuration\":{\"textTruncationMode\":\"none\",\"fontSize\":\"medium\",\"fontSizeOverride\":null}},\"bar\":{\"chartType\":\"bar\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"column\":{\"chartType\":\"column\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"line\":{\"chartType\":\"line\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"area\":{\"chartType\":\"area\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"},\"minorTickInterval\":null},\"yAxis\":[{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null,\"minorTickInterval\":null}],\"seriesInfo\":{}}},\"pie\":{\"chartType\":\"pie\",\"version\":3,\"configuration\":{\"donutMode\":true,\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"label\":{\"truncationMode\":\"middle\"},\"showSliceBorders\":true,\"maxNumOfPieSlices\":\"10\"}}},\"boxplot\":{\"chartType\":\"boxplot\",\"version\":1,\"configuration\":{\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"min\":null,\"max\":null}}},\"map\":{\"version\":1,\"configuration\":{}},\"svv\":{\"version\":2,\"configuration\":{\"colorOverride\":null,\"backgroundColorEnabled\":false,\"noDataBehavior\":{\"enabled\":false,\"color\":\"#cccccc\",\"value\":null,\"isString\":null},\"valueType\":{\"number\":{\"showNumber\":true,\"unit\":null,\"colorsByValueRange\":null},\"boolean\":{\"trueColor\":\"#6aa84f\",\"falseColor\":\"#cc0000\"}},\"labels\":{\"prefix\":{\"enabled\":false,\"text\":\"\",\"align\":\"left\"},\"postfix\":{\"enabled\":false,\"text\":\"\",\"align\":\"right\"}}}},\"sankey\":{\"version\":1,\"configuration\":{}},\"text\":{\"version\":1,\"configuration\":{\"text\":null}},\"metrics\":{\"version\":2,\"configuration\":{\"blockSettings\":{},\"viewType\":\"timeline\",\"zoom\":\"xy\",\"yAxis\":{\"defaults\":[{\"name\":\"\"},{\"name\":\"\"}],\"custom\":[{},{}]},\"xAxis\":{\"scrubber\":true},\"outliers\":{\"type\":1,\"top\":10,\"scope\":0,\"cyclicality\":false,\"sensitivity\":3},\"colorFamily\":\"METRIC_DEFAULT\"}},\"common\":{\"version\":1,\"configuration\":{\"drilldown\":{\"fallback\":{\"target\":{\"id\":null,\"name\":null,\"enabled\":null}}}}}}}",
      "isDisabled": false,
      "optimizationStatus": "Unoptimized",
      "fields": [
        {
          "name": "status_code",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "city",
          "type": "string",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "_sourcecategory",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "metro_code",
          "type": "int",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "_index",
          "type": "string",
          "key": false,
          "userReferenced": false
        },
        {
          "name": "_sourcename",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_sourcehost",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "country_name",
          "type": "string",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "_collector",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_count",
          "type": "int",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "area_code",
          "type": "int",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "region",
          "type": "string",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "referrer",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "country_code",
          "type": "string",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "user_agent",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "src_ip",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "size",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "method",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "url",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "latitude",
          "type": "double",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "_source",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "longitude",
          "type": "double",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "postal_code",
          "type": "string",
          "key": true,
          "userReferenced": true
        }
      ],
      "metricsQueries": [],
      "caller": "search",
      "desiredQuantizationInSecs": 0,
      "parameters": []
    },
    {
      "id": 940989,
      "parentId": 95320061,
      "title": "United States",
      "viewerType": "map",
      "detailLevel": 2,
      "queryString": "_sourceCategory=uploads/apache \n| parse regex \"^(?<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\" nodrop\n| parse regex \"(?<method>[A-Z]+)\\s(?<url>\\S+)\\sHTTP/[\\d\\.]+\\\"\\s(?<status_code>\\d+)\\s(?<size>[\\d-]+)\\s\\\"(?<referrer>.*?)\\\"\\s\\\"(?<user_agent>.+?)\\\".*\" nodrop\n| lookup latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code from geo://default on ip = src_ip\n| where country_name = \"United States\" \n| count by latitude, longitude, country_code, country_name, region, city, postal_code, area_code, metro_code",
      "timeRange": "[{\"t\":\"relative\",\"d\":-3600000}]",
      "x": 13,
      "y": 1,
      "width": 12,
      "height": 6,
      "properties": "{\"version\":3,\"settings\":{\"table\":{\"version\":2,\"configuration\":{\"textTruncationMode\":\"none\",\"fontSize\":\"medium\",\"fontSizeOverride\":null}},\"bar\":{\"chartType\":\"bar\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"column\":{\"chartType\":\"column\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"line\":{\"chartType\":\"line\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null},\"seriesInfo\":{}}},\"area\":{\"chartType\":\"area\",\"version\":2,\"configuration\":{\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"stacking\":null,\"lineToArea\":false},\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"},\"minorTickInterval\":null},\"yAxis\":[{\"title\":null,\"logScale\":false,\"min\":null,\"max\":null,\"bands\":null,\"minorTickInterval\":null}],\"seriesInfo\":{}}},\"pie\":{\"chartType\":\"pie\",\"version\":3,\"configuration\":{\"donutMode\":true,\"colors\":{\"index\":null,\"overrides\":null},\"legend\":{\"enabled\":true,\"position\":\"right\"},\"plotOptions\":{\"label\":{\"truncationMode\":\"middle\"},\"showSliceBorders\":true,\"maxNumOfPieSlices\":\"10\"}}},\"boxplot\":{\"chartType\":\"boxplot\",\"version\":1,\"configuration\":{\"xAxis\":{\"title\":null,\"label\":{\"truncationMode\":\"middle\"}},\"yAxis\":{\"title\":null,\"min\":null,\"max\":null}}},\"map\":{\"version\":1,\"configuration\":{}},\"svv\":{\"version\":2,\"configuration\":{\"colorOverride\":null,\"backgroundColorEnabled\":false,\"noDataBehavior\":{\"enabled\":false,\"color\":\"#cccccc\",\"value\":null,\"isString\":null},\"valueType\":{\"number\":{\"showNumber\":true,\"unit\":null,\"colorsByValueRange\":null},\"boolean\":{\"trueColor\":\"#6aa84f\",\"falseColor\":\"#cc0000\"}},\"labels\":{\"prefix\":{\"enabled\":false,\"text\":\"\",\"align\":\"left\"},\"postfix\":{\"enabled\":false,\"text\":\"\",\"align\":\"right\"}}}},\"sankey\":{\"version\":1,\"configuration\":{}},\"text\":{\"version\":1,\"configuration\":{\"text\":null}},\"metrics\":{\"version\":2,\"configuration\":{\"blockSettings\":{},\"viewType\":\"timeline\",\"zoom\":\"xy\",\"yAxis\":{\"defaults\":[{\"name\":\"\"},{\"name\":\"\"}],\"custom\":[{},{}]},\"xAxis\":{\"scrubber\":true},\"outliers\":{\"type\":1,\"top\":10,\"scope\":0,\"cyclicality\":false,\"sensitivity\":3},\"colorFamily\":\"METRIC_DEFAULT\"}},\"common\":{\"version\":1,\"configuration\":{\"drilldown\":{\"fallback\":{\"target\":{\"id\":null,\"name\":null,\"enabled\":null}}}}}}}",
      "isDisabled": false,
      "optimizationStatus": "Unoptimized",
      "fields": [
        {
          "name": "status_code",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "city",
          "type": "string",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "_sourcecategory",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "metro_code",
          "type": "int",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "_index",
          "type": "string",
          "key": false,
          "userReferenced": false
        },
        {
          "name": "_sourcename",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_sourcehost",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "country_name",
          "type": "string",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "_collector",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "_count",
          "type": "int",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "area_code",
          "type": "int",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "region",
          "type": "string",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "referrer",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "country_code",
          "type": "string",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "user_agent",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "src_ip",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "size",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "method",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "url",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "latitude",
          "type": "double",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "_source",
          "type": "string",
          "key": false,
          "userReferenced": true
        },
        {
          "name": "longitude",
          "type": "double",
          "key": true,
          "userReferenced": true
        },
        {
          "name": "postal_code",
          "type": "string",
          "key": true,
          "userReferenced": true
        }
      ],
      "metricsQueries": [],
      "caller": "search",
      "desiredQuantizationInSecs": 0,
      "parameters": []
    }
  ],
    "filters": [
      {
        "fieldName": "country_code",
        "label": "country_code",
        "defaultValue": null,
        "properties": "",
        "id": 74720,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940988,
            "isParameter": false
          },
          {
            "id": 940987,
            "isParameter": false
          },
          {
            "id": 940989,
            "isParameter": false
          },
          {
            "id": 940986,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      },
      {
        "fieldName": "status_code",
        "label": "status_code",
        "defaultValue": null,
        "properties": "",
        "id": 74721,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940987,
            "isParameter": false
          },
          {
            "id": 940988,
            "isParameter": false
          },
          {
            "id": 940986,
            "isParameter": false
          },
          {
            "id": 940989,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      },
      {
        "fieldName": "method",
        "label": "method",
        "defaultValue": null,
        "properties": "",
        "id": 74718,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940987,
            "isParameter": false
          },
          {
            "id": 940989,
            "isParameter": false
          },
          {
            "id": 940988,
            "isParameter": false
          },
          {
            "id": 940986,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      },
      {
        "fieldName": "size",
        "label": "size",
        "defaultValue": null,
        "properties": "",
        "id": 74722,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940989,
            "isParameter": false
          },
          {
            "id": 940988,
            "isParameter": false
          },
          {
            "id": 940986,
            "isParameter": false
          },
          {
            "id": 940987,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      },
      {
        "fieldName": "user_agent",
        "label": "user_agent",
        "defaultValue": null,
        "properties": "",
        "id": 74716,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940988,
            "isParameter": false
          },
          {
            "id": 940989,
            "isParameter": false
          },
          {
            "id": 940986,
            "isParameter": false
          },
          {
            "id": 940987,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      },
      {
        "fieldName": "city",
        "label": "city",
        "defaultValue": null,
        "properties": "",
        "id": 74714,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940987,
            "isParameter": false
          },
          {
            "id": 940989,
            "isParameter": false
          },
          {
            "id": 940988,
            "isParameter": false
          },
          {
            "id": 940986,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      },
      {
        "fieldName": "src_ip",
        "label": "src_ip",
        "defaultValue": null,
        "properties": "",
        "id": 74725,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940986,
            "isParameter": false
          },
          {
            "id": 940988,
            "isParameter": false
          },
          {
            "id": 940987,
            "isParameter": false
          },
          {
            "id": 940989,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      },
      {
        "fieldName": "area_code",
        "label": "area_code",
        "defaultValue": null,
        "properties": "",
        "id": 74715,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940989,
            "isParameter": false
          },
          {
            "id": 940988,
            "isParameter": false
          },
          {
            "id": 940987,
            "isParameter": false
          },
          {
            "id": 940986,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "numeric"
      },
      {
        "fieldName": "postal_code",
        "label": "postal_code",
        "defaultValue": null,
        "properties": "",
        "id": 74723,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940986,
            "isParameter": false
          },
          {
            "id": 940987,
            "isParameter": false
          },
          {
            "id": 940989,
            "isParameter": false
          },
          {
            "id": 940988,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      },
      {
        "fieldName": "region",
        "label": "region",
        "defaultValue": null,
        "properties": "",
        "id": 74713,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940989,
            "isParameter": false
          },
          {
            "id": 940986,
            "isParameter": false
          },
          {
            "id": 940988,
            "isParameter": false
          },
          {
            "id": 940987,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      },
      {
        "fieldName": "url",
        "label": "url",
        "defaultValue": null,
        "properties": "",
        "id": 74717,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940989,
            "isParameter": false
          },
          {
            "id": 940986,
            "isParameter": false
          },
          {
            "id": 940987,
            "isParameter": false
          },
          {
            "id": 940988,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      },
      {
        "fieldName": "country_name",
        "label": "country_name",
        "defaultValue": null,
        "properties": "",
        "id": 74724,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940986,
            "isParameter": false
          },
          {
            "id": 940987,
            "isParameter": false
          },
          {
            "id": 940988,
            "isParameter": false
          },
          {
            "id": 940989,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      },
      {
        "fieldName": "referrer",
        "label": "referrer",
        "defaultValue": null,
        "properties": "",
        "id": 74719,
        "parentId": 95320061,
        "panels": [
          {
            "id": 940987,
            "isParameter": false
          },
          {
            "id": 940986,
            "isParameter": false
          },
          {
            "id": 940989,
            "isParameter": false
          },
          {
            "id": 940988,
            "isParameter": false
          }
        ],
        "isParameterizedAutoComplete": false,
        "autoCompleteId": "95320061",
        "type": "textbox"
      }
    ],
      "version": {
    "error": false,
      "errorMessage": null,
        "errorInstanceId": null,
          "errorKey": null,
            "keyedErrors": [],
              "modifiedAt": 1508501433554,
                "modifiedBy": "",
                  "modifiedByUserId": 0
  }
}

/**
Dashboard has many panels.
Panel belongs to Dashboard
Filters belongs to Dashboard
Dashboad has many filters.
*/
