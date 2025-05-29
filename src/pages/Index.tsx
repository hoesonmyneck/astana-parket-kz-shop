import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Дуб Классик",
      price: "15,500",
      image: "/src/img/дуб классик.jpg",
      material: "Натуральный дуб"
    },
    {
      id: 2,
      name: "Ясень Элегант",
      price: "18,900",
      image: "/src/img/ясень.jpg", 
      material: "Массив ясеня"
    },
    {
      id: 3,
      name: "Орех Премиум",
      price: "22,000",
      image: "/src/img/орех премиум.jpg",
      material: "Американский орех"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
            Элитный паркет
            <span className="block text-orange-800">в Астане</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-700 mb-8 font-light">
            Премиальные паркетные покрытия из натурального дерева для вашего дома
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 text-lg">
                Посмотреть каталог
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-amber-800 text-amber-800 hover:bg-amber-100 px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-4">
            Популярные модели
          </h2>
          <p className="text-center text-amber-700 text-lg mb-12">
            Откройте для себя наши самые востребованные паркетные покрытия
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2 group-hover:text-orange-800 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-amber-600 mb-3">{product.material}</p>
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
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-amber-100/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Почему выбирают нас?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Местное присутствие</h3>
              <p className="text-amber-700">Работаем в Астане более 10 лет</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Быстрая доставка</h3>
              <p className="text-amber-700">Доставка по Астане в течение 1-2 дней</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Гарантия качества</h3>
              <p className="text-amber-700">Гарантия на все виды паркета до 25 лет</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
