
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Дуб Классик",
      price: "15,500",
      category: "oak",
      material: "Натуральный дуб",
      thickness: "15 мм",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Ясень Элегант", 
      price: "18,900",
      category: "ash",
      material: "Массив ясеня",
      thickness: "18 мм",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Орех Премиум",
      price: "22,000", 
      category: "walnut",
      material: "Американский орех",
      thickness: "20 мм",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Дуб Винтаж",
      price: "17,800",
      category: "oak", 
      material: "Состаренный дуб",
      thickness: "15 мм",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Клен Арктик",
      price: "19,500",
      category: "maple",
      material: "Канадский клен",
      thickness: "16 мм", 
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Орех Шоколад",
      price: "24,500",
      category: "walnut",
      material: "Европейский орех",
      thickness: "22 мм",
      image: "/placeholder.svg"
    }
  ];

  const categories = [
    { id: "all", name: "Все виды" },
    { id: "oak", name: "Дуб" },
    { id: "ash", name: "Ясень" },
    { id: "walnut", name: "Орех" },
    { id: "maple", name: "Клен" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 text-center">
            Каталог паркета
          </h1>
          <p className="text-center text-amber-700 text-lg mb-12">
            Выберите идеальное паркетное покрытие для вашего дома
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="h-6 w-6 text-amber-600 mt-2" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-amber-800 hover:bg-amber-900" 
                  : "border-amber-600 text-amber-800 hover:bg-amber-100"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-200 rounded-t-lg"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2 group-hover:text-orange-800 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-amber-600 mb-1">{product.material}</p>
                    <p className="text-sm text-amber-500 mb-4">Толщина: {product.thickness}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-orange-800">
                        {product.price} ₸/м²
                      </span>
                      <ArrowRight className="h-5 w-5 text-amber-600 group-hover:text-orange-800 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
