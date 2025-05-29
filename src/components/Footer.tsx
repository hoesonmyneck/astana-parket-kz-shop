
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ParketKZ</h3>
            <p className="text-amber-100 mb-4">
              Ведущий поставщик элитных паркетных покрытий в Астане с 2014 года.
            </p>
            <p className="text-amber-200 text-sm">
              Более 1000 довольных клиентов по всему Казахстану
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-amber-300" />
                <span className="text-amber-100">+7 (717) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-amber-300" />
                <span className="text-amber-100">info@parket-kz.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-amber-300 mt-1" />
                <span className="text-amber-100">
                  г. Астана, ул. Абая 25/1<br />
                  ТЦ "Строительный", 2 этаж
                </span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-3 text-amber-300" />
                <div className="text-amber-100">
                  <div>Пн-Пт: 9:00 - 18:00</div>
                  <div>Сб: 10:00 - 16:00</div>
                  <div>Вс: выходной</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-amber-100">
              <li>• Продажа паркета</li>
              <li>• Консультации по выбору</li>
              <li>• Доставка по Астане</li>
              <li>• Профессиональный монтаж</li>
              <li>• Гарантийное обслуживание</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © 2024 ParketKZ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
