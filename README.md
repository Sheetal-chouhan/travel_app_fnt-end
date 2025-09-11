App Link :- https://travelss-booking.onrender.com
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── public
    ├── favicon.ico
    ├── index.html
    ├── logo192.png
    ├── logo512.png
    ├── manifest.json
    └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── components
        ├── Alert
        │   └── Alert.jsx
        ├── Auth
        │   ├── Auth.css
        │   ├── AuthLogin.jsx
        │   └── AuthSignup.jsx
        ├── AuthModal
        │   ├── AuthModal.css
        │   └── AuthModal.jsx
        ├── Categories
        │   ├── Categories.css
        │   └── Categories.jsx
        ├── DateSelector
        │   ├── DateSelector.css
        │   └── DateSelector.jsx
        ├── Filter
        │   ├── Filter.css
        │   ├── Filter.jsx
        │   ├── FreeCancel
        │   │   ├── FreeCancel.css
        │   │   └── FreeCancel.jsx
        │   ├── PriceRange
        │   │   └── PriceRange.jsx
        │   ├── PropertyType
        │   │   ├── ProperType.css
        │   │   └── PropertyType.jsx
        │   ├── Ratings
        │   │   ├── Ratings.css
        │   │   └── Ratings.jsx
        │   ├── RoomsAndBeds
        │   │   ├── RoomsAndBeds.css
        │   │   └── RoomsAndBeds.jsx
        │   └── index.jsx
        ├── FinalPrice
        │   ├── FinalPrice.css
        │   └── FinalPrice.jsx
        ├── HotelCard
        │   ├── HotelCard.css
        │   └── HotelCard.jsx
        ├── HotelDetails
        │   ├── HotelDetails.css
        │   └── HotelDetails.jsx
        ├── HotelImages
        │   ├── HotelImages.css
        │   └── HotelImages.jsx
        ├── Navbar
        │   ├── Navbar.css
        │   └── Navbar.jsx
        ├── OrderSummaryComp
        │   ├── OrderSummaryComp.css
        │   └── OrderSummaryComp.jsx
        ├── ProfileDropDown
        │   ├── ProfileDropDown.css
        │   └── ProfileDropDown.jsx
        ├── SearchStayWithDate
        │   ├── SearchStayWithDate.css
        │   └── SearchStayWithDate.jsx
        └── index.js
    ├── context
        ├── alert-context.js
        ├── auth-context.js
        ├── category-context.js
        ├── date-context.js
        ├── filter-context.jsx
        ├── hotel-context.js
        ├── index.js
        └── wishlist-context.js
    ├── index.js
    ├── pages
        ├── Home
        │   ├── Home.css
        │   └── Home.js
        ├── OrderSummaryComp
        │   ├── OrderSummaryComp.css
        │   └── OrderSummaryComp.jsx
        ├── Payment
        │   ├── Payment.css
        │   └── Payment.js
        ├── SearchResults
        │   ├── SearchResults.css
        │   └── SearchResults.jsx
        ├── SingleHotel
        │   ├── SingleHotel.css
        │   └── SingleHotel.jsx
        ├── Wishlist
        │   ├── Wishlist.css
        │   └── Wishlist.js
        └── index.js
    ├── reducer
        ├── auth-reducer.js
        ├── date-reducer.js
        ├── filter-reducer.js
        ├── index.js
        └── wishlist-reducer.js
    ├── services
        ├── index.js
        ├── login-service.js
        └── signup-service.js
    └── utils
        ├── email-regex.js
        ├── find-hotel-in-wishlist.js
        ├── hotel-cancel.js
        ├── index.js
        ├── name-regex.js
        ├── number-regex.js
        ├── password-regex.js
        ├── price-range.js
        ├── property.js
        ├── rating.js
        └── room-beds.js
