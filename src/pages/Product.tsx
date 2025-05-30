import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, ShoppingCart, Ruler, Palette, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Product = () => {
  const { id } = useParams();

  const products = {
    "1": {
      name: "Дуб Классик",
      price: "15,500",
      material: "Натуральный дуб",
      thickness: "15 мм",
      width: "120 мм",
      length: "1200 мм",
      finish: "Масло-воск",
      warranty: "25 лет",
      image: "/src/img/дуб классик.jpg",
      description: "Классический дубовый паркет с натуральной текстурой дерева. Идеально подходит для гостиных, спален и кабинетов. Обработан экологически чистым масло-воском, что подчеркивает естественную красоту древесины.",
      features: [
        "100% натуральный дуб из европейских лесов",
        "Экологически безопасное покрытие",
        "Устойчив к влаге и износу",
        "Возможность реставрации",
        "Классическая обработка маслом"
      ],
      installation: "Рекомендуется укладка на подготовленное основание с использованием специального клея. Время укладки: 1-2 дня для помещения 20 м²."
    },
    "2": {
      name: "Ясень Элегант",
      price: "18,900", 
      material: "Массив ясеня",
      thickness: "18 мм",
      width: "140 мм",
      length: "1400 мм", 
      finish: "Лак полиуретановый",
      warranty: "20 лет",
      image: "/src/img/ясень.jpg",
      description: "Элегантный паркет из массива ясеня с выраженной текстурой. Светлые тона визуально увеличивают пространство. Покрыт износостойким полиуретановым лаком.",
      features: [
        "Массив ясеня высшего сорта",
        "Полиуретановое покрытие повышенной прочности",
        "Светлые оттенки для визуального расширения пространства",
        "Высокая плотность древесины",
        "Антистатические свойства"
      ],
      installation: "Укладка плавающим способом или на клей. Требует акклиматизации 48 часов перед укладкой."
    },
    "3": {
      name: "Орех Премиум",
      price: "22,000",
      material: "Американский орех", 
      thickness: "20 мм",
      width: "150 мм",
      length: "1500 мм",
      finish: "Масло с твердым воском",
      warranty: "30 лет",
      image: "/src/img/орех премиум.jpg",
      description: "Эксклюзивный паркет из американского ореха премиум-класса. Богатая шоколадная текстура создает атмосферу роскоши. Каждая планка уникальна по рисунку.",
      features: [
        "Элитная древесина американского ореха",
        "Уникальный рисунок каждой планки",
        "Твердое восковое покрытие",
        "Превосходная звукоизоляция",
        "Антибактериальные свойства",
        "Ручная селекция древесины"
      ],
      installation: "Эксклюзивная укладка мастерами высшей квалификации. Время укладки: 2-3 дня с учетом всех технологических процессов."
    },
    "4": {
      name: "Дуб Винтаж",
      price: "17,800",
      material: "Состаренный дуб",
      thickness: "15 мм",
      width: "125 мм",
      length: "1200 мм",
      finish: "Масло античное",
      warranty: "25 лет",
      image: "/src/img/дуб винтаж.jpg",
      description: "Винтажный паркет из состаренного дуба с уникальными следами времени. Искусственно состаренная поверхность создает атмосферу старинного замка. Каждая планка имеет неповторимый характер.",
      features: [
        "Искусственно состаренный европейский дуб",
        "Уникальная текстура с эффектом старения",
        "Античное масляное покрытие",
        "Высокая износостойкость",
        "Подходит для стиля лофт и винтаж",
        "Ручная обработка каждой планки"
      ],
      installation: "Укладка на специальную подложку с учетом винтажного характера покрытия. Время укладки: 2 дня для помещения 20 м²."
    },
    "5": {
      name: "Клен Арктик",
      price: "19,500",
      material: "Канадский клен",
      thickness: "16 мм",
      width: "130 мм",
      length: "1300 мм",
      finish: "Матовый лак",
      warranty: "22 года",
      image: "/src/img/клен.png",
      description: "Светлый паркет из канадского клена с нежными оттенками. Арктическая серия отличается особой белизной и мягкостью тонов. Идеален для скандинавского стиля интерьера.",
      features: [
        "100% канадский клен высшего сорта",
        "Светлые арктические оттенки",
        "Матовое защитное покрытие",
        "Превосходная твердость древесины",
        "Гипоаллергенные свойства",
        "Устойчивость к перепадам температур"
      ],
      installation: "Плавающая укладка с замковым соединением. Подходит для системы теплый пол. Время укладки: 1-2 дня для помещения 20 м²."
    },
    "6": {
      name: "Орех Шоколад",
      price: "24,500",
      material: "Европейский орех",
      thickness: "22 мм",
      width: "160 мм",
      length: "1600 мм",
      finish: "Шелковистый лак",
      warranty: "30 лет",
      image: "/src/img/орех шоколад.jpg",
      description: "Роскошный паркет из европейского ореха с насыщенными шоколадными оттенками. Увеличенная толщина и ширина планок создают ощущение максимальной премиальности и солидности.",
      features: [
        "Премиальный европейский орех",
        "Насыщенные шоколадные тона",
        "Увеличенные размеры планок",
        "Шелковистое лаковое покрытие",
        "Максимальная звукоизоляция",
        "Эксклюзивная сортировка древесины",
        "Ручная шлифовка и полировка"
      ],
      installation: "Эксклюзивная укладка специалистами премиум-класса. Требует идеально подготовленного основания. Время укладки: 3-4 дня для помещения 20 м²."
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/catalog">
            <Button variant="ghost" className="mb-6 text-amber-800 hover:text-amber-900">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад к каталогу
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={`${product.name} вид 1`}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={`${product.name} вид 2`}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={product.image} 
                    alt={`${product.name} вид 3`}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-amber-900 mb-4">{product.name}</h1>
                <p className="text-2xl font-semibold text-orange-800 mb-6">{product.price} ₸/м²</p>
                <p className="text-lg text-amber-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Specifications */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-4 flex items-center">
                    <Ruler className="mr-2 h-5 w-5" />
                    Технические характеристики
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-amber-600">Материал:</span>
                      <span className="ml-2 text-amber-900 font-medium">{product.material}</span>
                    </div>
                    <div>
                      <span className="text-amber-600">Толщина:</span>
                      <span className="ml-2 text-amber-900 font-medium">{product.thickness}</span>
                    </div>
                    <div>
                      <span className="text-amber-600">Ширина:</span>
                      <span className="ml-2 text-amber-900 font-medium">{product.width}</span>
                    </div>
                    <div>
                      <span className="text-amber-600">Длина:</span>
                      <span className="ml-2 text-amber-900 font-medium">{product.length}</span>
                    </div>
                    <div>
                      <span className="text-amber-600">Покрытие:</span>
                      <span className="ml-2 text-amber-900 font-medium">{product.finish}</span>
                    </div>
                    <div>
                      <span className="text-amber-600">Гарантия:</span>
                      <span className="ml-2 text-amber-900 font-medium">{product.warranty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-4 flex items-center">
                    <Palette className="mr-2 h-5 w-5" />
                    Особенности
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Shield className="h-4 w-4 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-amber-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Installation */}
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">Монтаж</h3>
                  <p className="text-amber-800">{product.installation}</p>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-800 hover:bg-amber-900 flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Заказать
                </Button>
                <Button variant="outline" size="lg" className="border-amber-800 text-amber-800 hover:bg-amber-100 flex-1">
                  <Phone className="mr-2 h-5 w-5" />
                  Консультация
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
