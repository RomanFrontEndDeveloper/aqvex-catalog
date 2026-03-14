# AQVEX Test Task – Product Catalog

This project is a test assignment for AQVEX.

The task was to implement a product catalog page based on the provided Figma design using **React + TypeScript + Vite**.

---

## Design

Figma design:
https://www.figma.com/design/CMy9bnx2VGTVsj7uSBFf9Y/aptitude-test

---

## Technologies

- React
- TypeScript
- Vite
- CSS

---

## Features

- Fetching products from API
- Product grid layout
- Product card component
- Pagination
- Responsive layout

---

## API

Products are loaded from:

https://ip-194-99-21-145-139178.vps.hosted-by-mvps.net/api/v1/products

---

## Images

The Figma design contains a single product image used as a visual template.

For this reason, a **local placeholder image** is used for all products.

Location:

public/images/product-placeholder.png

---

## Project structure

src
├─ api
│ └─ products.ts
│
├─ assets
│
├─ components
│ ├─ Footer
│ ├─ Header
│ ├─ Pagination
│ ├─ ProductCard
│ ├─ ProductGrid
│ └─ Toolbar
│
├─ types
│ └─ product.ts
│
├─ utils
│ ├─ formatPrice.ts
│ └─ pagination.ts
│
├─ App.css
├─ App.tsx
├─ index.css
├─ main.tsx
└─ vite-env.d.ts

---

## Pagination

Pagination is implemented on the client side.

Products per page:

const PRODUCTS_PER_PAGE = 12

---

## Run locally

Install dependencies

npm install

Run development server

npm run dev

Open

http://localhost:5173

---

## Author

Roman Okhremov  
Junior Frontend Developer
