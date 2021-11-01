import React from "react";
import "../styles.css";
import Card from "./Card";

export default function Image() {
  return (
    <div className="Image">
      <Card
        image="https://images.pexels.com/photos/99435/pexels-photo-99435.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        title="BMW 3 Series Sedan"
        text="BMW 3 Series is a Sedan available in a price range of ₹ 44.84 - 62.90 Lakh. It is available in 4 variants, 1 engine option. Other key specifications of the 3 Series include a Ground Clearance of 135 mm and Bootspace of 480 litres.The mileage of 3 Series ranges from 11.86 kmpl to 20.37 kmpl."
      />
      <Card
        image="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/X5ModelImage.jpg&w=730&h=484&q=75&c=1"
        title="BMW X5 "
        text="BMW X5 price starts at ₹ 76.47 Lakh and goes upto ₹ 90.74 Lakh. The price of Diesel version for X5 ranges between ₹ 76.47 Lakh - ₹ 90.31 Lakh and the price of Petrol version for X5 ranges between ₹ 77.90 Lakh - ₹ 90.74 Lakh.."
      />
      <Card
        image="https://cdni.autocarindia.com/ExtraImages/20200527115046_BMW-5-Series-2021-front.jpg"
        title="BMW 5 Series"
        text="The BMW 5 Series has 2 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1995 cc and 2993 cc while the Petrol engine is 1998 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the 5 Series has a mileage of 14.82 to 20.37 kmpl . The 5 Series is a 5 seater 6 cylinder car."
      />
    </div>
  );
}
