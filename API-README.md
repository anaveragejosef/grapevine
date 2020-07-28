## Server API

### Retrieve Wine List
  * GET `/api/wine-list/all`

**Success Status Code:** `200`

**Path Parameters:**
  * `wineType`
  * `varietal`

**Returns:** Array of Objects

```json
    [{
      "winery": "String",
      "name": "String",
      "wineType": "String",
      "varietal": "String",
      "vintage": "Number",
      "notes": "String",
      "purchaseAgain": "Boolean",
      "wineImage": "Image URL",
    }...]
```

### Create Wine Entry
  * POST `/api/wine-list/create`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys

```json
    {
      "winery": "String",
      "name": "String",
      "wineType": "String",
      "varietal": "String",
      "vintage": "Number",
      "notes": "String",
      "purchaseAgain": "Boolean",
      "wineImage": "Image URL",
    }
```

### Update Wine Entry
  * PUT `api/wine-list/update`

**Success Status Code:** `204`

**Request Body**: Expects JSON with the following keys

```json
    {
      "winery": "String",
      "name": "String",
      "wineType": "String",
      "varietal": "String",
      "vintage": "Number",
      "notes": "String",
      "purchaseAgain": "Boolean",
    }
```

### Delete Wine Entry
  * DELETE `/api/wine-list/remove`

**Path Parameters:**
  * `id` mongoDB id

**Success Status Code:** `204`

### Add image to S3
  * POST `/api/upload-image`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys

```json
    {
      "uri": "Image URL",
      "type": "String",
      "name": "String",
    }
```