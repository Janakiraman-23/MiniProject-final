import React, { useEffect, useState, useRef } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();

  // Dynamically set options based on food name
  const getOptionsByName = (name) => {
    switch (name) {
      case "Chicken Cheese Pizza":
        return {
          small: { price: 100, img: "https://tse4.mm.bing.net/th?id=OIP.6rzM0cv81p0ERa73yGhfowHaE8&pid=Api&P=0&h=220" },
          medium: { price: 150, img: "https://tse4.mm.bing.net/th?id=OIP.6rzM0cv81p0ERa73yGhfowHaE8&pid=Api&P=0&h=220" },
          large: { price: 200, img: "https://tse4.mm.bing.net/th?id=OIP.6rzM0cv81p0ERa73yGhfowHaE8&pid=Api&P=0&h=220" },
        };
       
      case "Mix Veg Pizza":
        return {
          small: { price: 80, img: "https://images.eatsmarter.com/sites/default/files/styles/920x690/public/mixed-vegetable-pizza-538696.jpg"},
          medium: { price: 120, img: "https://images.eatsmarter.com/sites/default/files/styles/920x690/public/mixed-vegetable-pizza-538696.jpg" },
          large: { price: 160, img: "https://images.eatsmarter.com/sites/default/files/styles/920x690/public/mixed-vegetable-pizza-538696.jpg"},
        };
        case "Chicken Fried Rice":
          return {
            small: { price: 110, img: "https://tse4.mm.bing.net/th?id=OIP.MfRzYZAMltY5TPyj0iBskQHaHa&pid=Api&P=0&h=220"},
            medium: { price: 149, img: "https://tse4.mm.bing.net/th?id=OIP.MfRzYZAMltY5TPyj0iBskQHaHa&pid=Api&P=0&h=220"},
            large: { price: 180, img: "https://tse4.mm.bing.net/th?id=OIP.MfRzYZAMltY5TPyj0iBskQHaHa&pid=Api&P=0&h=220" },
          };
          case "Veg Fried Rice":
            return {
              small: { price: 89, img: "https://tse1.mm.bing.net/th?id=OIP.VF7wi5xB8ZY1HfKpRNKv3QHaE8&pid=Api&P=0&h=220"},
              medium: { price: 119, img: "https://tse1.mm.bing.net/th?id=OIP.VF7wi5xB8ZY1HfKpRNKv3QHaE8&pid=Api&P=0&h=220" },
              large: { price: 150, img: "https://tse1.mm.bing.net/th?id=OIP.VF7wi5xB8ZY1HfKpRNKv3QHaE8&pid=Api&P=0&h=220" },
            };
            case "Fish Biryani":
            return {
              small: { price: 120, img: "https://1.bp.blogspot.com/-7aqHsMY9UJM/YC08Ui-SpeI/AAAAAAAAZgs/2EGQEgPQJEM5g7_8DJ0_-9SRtOOhiPpogCLcBGAsYHQ/s2048/salmon%2Bfish%2Bbiryani%2B18.JPG"},
              medium: { price: 160, img: "https://1.bp.blogspot.com/-7aqHsMY9UJM/YC08Ui-SpeI/AAAAAAAAZgs/2EGQEgPQJEM5g7_8DJ0_-9SRtOOhiPpogCLcBGAsYHQ/s2048/salmon%2Bfish%2Bbiryani%2B18.JPG"},
              large: { price: 210, img: "https://1.bp.blogspot.com/-7aqHsMY9UJM/YC08Ui-SpeI/AAAAAAAAZgs/2EGQEgPQJEM5g7_8DJ0_-9SRtOOhiPpogCLcBGAsYHQ/s2048/salmon%2Bfish%2Bbiryani%2B18.JPG" },
            };
            case "Chicken Biryani":
            return {
              small: { price: 150, img: "https://img.freepik.com/premium-photo/chicken-biryani-biriyani-served-plate-isolated-table-top-view-indian-spicy-food_689047-3926.jpg?w=2000"},
              medium: { price: 185, img: "https://img.freepik.com/premium-photo/chicken-biryani-biriyani-served-plate-isolated-table-top-view-indian-spicy-food_689047-3926.jpg?w=2000" },
              large: { price: 230, img: "https://img.freepik.com/premium-photo/chicken-biryani-biriyani-served-plate-isolated-table-top-view-indian-spicy-food_689047-3926.jpg?w=2000" },
            };
            case "Veg Biryani":
            return {
              small: { price: 50, img: "https://www.zeelskitchen.com/wp-content/uploads/2015/07/Vegtable_Biryani_14.jpg"},
              medium: { price: 70, img: "https://www.zeelskitchen.com/wp-content/uploads/2015/07/Vegtable_Biryani_14.jpg"},
              large: { price: 99, img: "https://www.zeelskitchen.com/wp-content/uploads/2015/07/Vegtable_Biryani_14.jpg" },
            };
            case "Prawns Fried Rice":
            return {
              small: { price: 120, img: "https://mymorningmocha.com/wp-content/uploads/2021/11/How-to-make-easy-king-prawn-fried-rice-683x1024.jpg"},
              medium: { price: 150, img: "https://mymorningmocha.com/wp-content/uploads/2021/11/How-to-make-easy-king-prawn-fried-rice-683x1024.jpg" },
              large: { price: 250, img: "https://mymorningmocha.com/wp-content/uploads/2021/11/How-to-make-easy-king-prawn-fried-rice-683x1024.jpg" },
            };
            case "Chilli Paneer":
            return {
              small: { price: 60, img: "https://i0.wp.com/foodtrails25.com/wp-content/uploads/2022/10/Chilli-Paneer-featured.jpg?fit=1200%2C1200&ssl=1"},
              medium: { price: 80, img: "https://i0.wp.com/foodtrails25.com/wp-content/uploads/2022/10/Chilli-Paneer-featured.jpg?fit=1200%2C1200&ssl=1" },
              large: { price: 10, img: "https://i0.wp.com/foodtrails25.com/wp-content/uploads/2022/10/Chilli-Paneer-featured.jpg?fit=1200%2C1200&ssl=1"},
            };
            case "Paneer 65":
            return {
              small: { price: 40, img: "https://tse2.mm.bing.net/th?id=OIP.Hvgm48vYOrD8qqOvBzmZoQHaEK&pid=Api&P=0&h=220"},
              medium: { price: 60, img: "https://tse2.mm.bing.net/th?id=OIP.Hvgm48vYOrD8qqOvBzmZoQHaEK&pid=Api&P=0&h=220"},
              large: { price: 90, img: "https://tse2.mm.bing.net/th?id=OIP.Hvgm48vYOrD8qqOvBzmZoQHaEK&pid=Api&P=0&h=220" },
            };
            case "Chicken Tikka":
            return {
              small: { price: 65, img: "https://tse1.mm.bing.net/th?id=OIP.KA4paTX1C-PwilG15nZZRgHaLG&pid=Api&P=0&h=220"},
              medium: { price: 90, img:  "https://tse1.mm.bing.net/th?id=OIP.KA4paTX1C-PwilG15nZZRgHaLG&pid=Api&P=0&h=220"},
              large: { price: 150, img:  "https://tse1.mm.bing.net/th?id=OIP.KA4paTX1C-PwilG15nZZRgHaLG&pid=Api&P=0&h=220"},
            };
            case "Paneer Tikka":
            return {
              small: { price: 70, img: "https://tse1.mm.bing.net/th?id=OIP.eXu8MxX2urlnHUbBmXXFgwHaHa&pid=Api&P=0&h=220"},
              medium: { price: 100, img: "https://tse1.mm.bing.net/th?id=OIP.eXu8MxX2urlnHUbBmXXFgwHaHa&pid=Api&P=0&h=220" },
              large: { price: 140, img: "https://tse1.mm.bing.net/th?id=OIP.eXu8MxX2urlnHUbBmXXFgwHaHa&pid=Api&P=0&h=220" },
            };

      default:
        return {};
    }
  };

  // Get the options for the current food item
  const options = getOptionsByName(props.foodItem.name);
  const priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("small"); // Default size is 'small'
  const [imageSrc, setImageSrc] = useState(options.small?.img); // Initial image source for 'small'

  const handleAddToCart = async () => {
    const existingItem = data.find(
      (item) => item.id === props.foodItem._id && item.size === size
    );
    const finalPrice = qty * options[size]?.price; // Get price from the selected size option

    if (existingItem) {
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        price: finalPrice,
        qty: qty,
        size: size,
      });
    } else {
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
        img: imageSrc, // Add dynamic image based on selected size
      });
    }
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  // Update the image based on selected size
  useEffect(() => {
    if (size && options[size]) {
      setImageSrc(options[size].img); // Update image source based on selected size
    }
  }, [size, options]);

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px", color:"orange" }}>
        <img
          src={imageSrc} // Dynamically set image source based on selected size
          className="card-img-top "
          alt="Card Image"
          style={{ height: "120px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title" >{props.foodItem.name}</h5>
          <div className="container w-100" >
            <select
              className="m-2 h-100 bg-success rounded "style={{color:"white"}}
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value, 10))}
            >
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              className="m-2 h-100 bg-success rounded " style={{color:"white"}}
              ref={priceRef}
              value={size}
              onChange={(e) => setSize(e.target.value)} // Set size and change image dynamically
            >
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
            <div className="d-inline h-100 fs-5" >
              ₹{size ? qty * options[size]?.price : 0}/-
            </div>
          </div>
          <hr />
          <button
            className="btn btn-success justify-center ms-2" style={{color:"white"}}
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
