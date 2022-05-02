# API-Products-Service

## Authors
Matthew Pak

[![github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pakman3590)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matthew-h-pak/)



## Stack

[![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Amazon AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/)


## Overview

This Systems Design Capstone project was developed during the senior phase of the Hack Reactor Software Engineering Immersive (RFP2202). Our group was tasked to implement a REST API service for an e-commerce application. This particular API service was developed for the '/products' endpoints specifically.

## Install

```
npm install
```

change example.env to .env and configure variables.

## Run the App

```
npm run start
```

## API Endpoints

| Method | Path |
| GET    | '/products'                      |
| GET    | '/products/:product_id'          |
| GET    | '/products/:product_id/styles'   |

### GET /products/
Will return a list of products.

#### Parameters
| Parameter | Type    | Description                                                |
|-----------|---------|------------------------------------------------------------|
| [count]   | Integer | Specifies how many results per page to return. Default 5.  |
| [page]    | Integer | Specifies which page of results to return.     Default 1.  |

#### Response
status - 200
```json
[
  {
        "id": 1,
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140"
    },
  {
        "id": 2,
        "name": "Bright Future Sunglasses",
        "slogan": "You've got to wear shades",
        "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
        "category": "Accessories",
        "default_price": "69"
    },
  {
        "id": 3,
        "name": "Morning Joggers",
        "slogan": "Make yourself a morning person",
        "description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
        "category": "Pants",
        "default_price": "40"
    },
    // ...
]
```

### GET /product/:product_id
Will return product information for a specified product.

#### Parameters
| Parameter | Type    | Description                                                  |
|-----------|---------|--------------------------------------------------------------|
| product_id| Integer | Required - Specifies which product to return product info for|

#### Response
status - 200
```json
{
    "id": 11,
    "name": "Air Minis 250",
    "slogan": "Full court support",
    "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
    "category": "Basketball Shoes",
    "default_price": "0",
    "features": [
  	{
            "feature": "Sole",
            "value": "Rubber"
        },
  	{
            "feature": "Material",
            "value": "FullControlSkin"
        },
  	// ...
    ],
}
```

### GET /product/:product_id/styles
Will return product style information for a specified product.

#### Parameters
| Parameter | Type    | Description                                                  |
|-----------|---------|--------------------------------------------------------------|
| product_id| Integer | Required - Specifies which product to return style info for  |

#### Response
status - 200
```json
{
    "product_id": "1",
    "results": [
  	{
            "style_id": 1,
            "name": "Forest Green & Black",
            "original_price": "140",
            "sale_price": "0",
            "default?": true,
            "photos": [
  			{
                    "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_1_photo_number.jpg"
                },
  			{
                    "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_1_photo_number.jpg"
                }
  			// ...
            ],
        "skus": {
                	"37": {
                    		"quantity": 8,
                    		"size": "XS"
                	},
                	"38": {
                    		"quantity": 16,
                    		"size": "S"
                	},
                	"39": {
                    		"quantity": 17,
                    		"size": "M"
                	},
            //...
            	}
    },
  {
        "style_id": 2,
        "name": "Desert Brown & Tan",
        "original_price": "140",
        "sale_price": "0",
        "default?": false,
        "photos": [
  			{
                    "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
                    "url": "urlplaceholder/style_2_photo_number.jpg"
        }
      // ...
            ],
        "skus": {
                	"37": {
                    		"quantity": 8,
                    		"size": "XS"
                	},
                	"38": {
                    		"quantity": 16,
                    		"size": "S"
                	},
                	"39": {
                    		"quantity": 17,
                    		"size": "M"
                	},
            //...
            	}
    },
  // ...
}
```

### GET /product/:product_id/related
Will return a specific product's related products.

#### Parameters
| Parameter | Type    | Description                                                  |
|-----------|---------|--------------------------------------------------------------|
| product_id| Integer | Required - 	Required ID of the Product requested |

#### Response
status - 200
```json
[
  2,
  3,
  8,
  7
]
```
