import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Home",
      About: "About",
      Projects: "Projects",
      Contact: "Contact",
      WELCOME: "Welcome to Akkaya Electronic.",
      LED_SCREEN_AND_EVERYTHING:
        "You can find LED screens and everything you're looking for here.",
      SERVICES: "Our Services",
      LED_LIGHTS: "Led Lights",
      CITYMALL_CHOOSE_US:
        "City Mall Shopping Center chose us for their lighting solutions.",
      KELIN_YERI: "KelinYeri chose us for LED signs.",
      LED_SIGNS: "Led Signs",
      KELIN_YERI: "KelinYeri chose us for LED signs.",
      LED_Lighting_Systems: "LED Lighting Systems",
      City_Mall_Lighting_System:
        "System that illuminates and revitalizes every corner of City Mall shopping center.",
      Customer_Reviews: "Customer Reviews",
      Dilek_Aslan_Review:
        "They were very kind and fulfilled all my requests and more. My beauty salon looks very stylish.",
      Serkan_Ceviz_Review:
        "They designed a beautiful LED lighting setup for my engagement. They were meticulous and very fast.",
      City_Mall_Owner_Review:
        "We stand out a lot. Kudos to your team, keep up the good work.",
      City_Mall_Section_Title: "City Mall Shopping Center",
      City_Mall_Led_Systems_Description:
        "We designed a LED system surrounding the City Mall Shopping Center with our signature touch. The LED system added sparkle to its brilliance.",
      City_Mall_Led_Signs_Description:
        "We changed the atmosphere of the shopping center with LED signs.",
      City_Mall_Lighting_Systems_Description:
        "System that illuminates and revitalizes every corner of City Mall shopping center.",
      LED_Lighting_Systems_Title: "Our LED Lighting Systems",
      Kelin_Yeri_Lighting_Description:
        "Special LED lighting designed for Kelin Yeri. The logo is now more stylish and just as sparkling.",
      Buildings_Valued_Description:
        "We design LED systems that add value to buildings for residential areas.",

      Contact_Title: "Contact Us",
      Contact_Description:
        "If you have any questions or need more information, please contact us.",
      Contact_Info_Title: "Contact Information",
      Contact_Phone: "Phone: (0362) 447 22 32",
      Contact_Email: "Email: buseakkaya@gmail.com",
      Contact_Address: "Address: Esenevler, 100th Year Boulevard 21/B Samsun",
      Contact_Map_Title: "Our Address on Google Maps",
      Contact_Map_Popup:
        "Akkaya Elektronik <br /> Esenevler, 100th Year Boulevard 21/B Samsun",
      About_Title: "About Us",
      About_Description:
        "Welcome to our electronics store. We specialize in LED screens and lighting solutions. Our mission is to provide high-quality products and exceptional customer service.",
      About_History_Title: "Our History",
      About_History_Description:
        "Founded in 2000, our company has grown from a small local business to a leading provider of electronics and lighting solutions. We have always focused on quality and customer satisfaction.",
      About_Mission_Vision_Title: "Our Mission and Vision",
      About_Mission_Vision_Description:
        "Our mission is to deliver innovative and reliable electronics solutions that enhance the lives of our customers. Our vision is to be the most trusted and preferred provider of LED screens and lighting solutions worldwide.",
      About_Values_Title: "Our Values",
      About_Values_Description:
        "Integrity, innovation, and customer satisfaction are at the core of our values. We believe in building long-term relationships with our customers and partners.",
    },
  },
  tr: {
    translation: {
      Home: "ANA SAYFA",
      About: "HAKKIMIZDA",
      Projects: "PROJELER",
      Contact: "İLETİŞİM",
      WELCOME: "Akkaya Elektroniğe hoş geldiniz.",
      LED_SCREEN_AND_EVERYTHING:
        "Led ekran ve aradığınız her şeyi burada bulabilirsiniz.",
      SERVICES: "Hizmetlerimiz",
      LED_LIGHTS: "Led Işıklar",
      CITYMALL_CHOOSE_US:
        "City Mall Alışveriş Merkezi ışıklandırmalar için bizi tercih etti. ",
      LED_SIGNS: "Led Yazılar",
      KELIN_YERI: "KelinYeri Led yazılar için bizi tercih etti.",
      LED_Lighting_Systems: "Led Aydınlatma Sistemleri",
      City_Mall_Lighting_System:
        "City Mall avm'nin her bir yanını aydınlatan canlandıran sistem.",
      Customer_Reviews: "Müşteri Değerlendirmeleri",
      Dilek_Aslan_Review:
        "Çok nazik davrandılar ve tüm istediklerimi daha fazlasıyla yerine getirdiler. Güzellik salonum çok şık görünüyor.",
      Serkan_Ceviz_Review:
        "Nişanım için çok güzel led aydınlatma tasarladılar. Çok titiz ve bir o kadar da hızlıydı.",
      City_Mall_Owner_Review:
        "Çok dikkat çekiyoruz. Ellerinize sağlık böyle devam edin.",
      City_Mall_Section_Title: "City Mall Alışveriş Merkezi",
      City_Mall_Led_Systems_Description:
        "City Mall Alışveriş Merkezine imza dokunuşumuzla çevreleyen bir led sistem tasarladık. Led sistem sayesinde ışıltısına ışıltı kattı.",
      City_Mall_Led_Signs_Description:
        "Led Yazılar ile AVM'nin havasını değiştirdik.",
      City_Mall_Lighting_Systems_Description:
        "City Mall AVM'nin her bir yanını aydınlatan canlandıran sistem.",
      LED_Lighting_Systems_Title: "Led Aydınlatma Sistemlerimiz",
      Kelin_Yeri_Lighting_Description:
        "Kelin Yeri için tasarladığımız özel led aydınlatma. Logo artık daha şık ve bir o kadar da ışıltılı.",
      Buildings_Valued_Description:
        "Siteler için binanın değerine değer katan led sistemler tasarlıyoruz.",

      Contact_Title: "Bizimle İletişime Geçin",
      Contact_Description:
        "Herhangi bir sorunuz varsa veya daha fazla bilgi almak istiyorsanız lütfen bizimle iletişime geçiniz.",
      Contact_Info_Title: "İletişim Bilgilerimiz",
      Contact_Phone: "Telefon: (0362) 447 22 32",
      Contact_Email: "Email: buseakkaya@gmail.com",
      Contact_Address: "Adres: Esenevler, 100.yıl Bulvarı 21/B Samsun",
      Contact_Map_Title: "Google Maps üzerinden adresimiz",
      Contact_Map_Popup:
        "Akkaya Elektronik <br /> Esenevler, 100.yıl Bulvarı 21/B Samsun",
      About_Title: "Hakkımızda",
      About_Description:
        "Elektronik mağazamıza hoş geldiniz. LED ekranlar ve aydınlatma çözümlerinde uzmanız. Misyonumuz, yüksek kaliteli ürünler ve olağanüstü müşteri hizmetleri sunmaktır.",
      About_History_Title: "Tarihimiz",
      About_History_Description:
        "2000 yılında kurulan şirketimiz, küçük bir yerel işletmeden elektronik ve aydınlatma çözümlerinin önde gelen sağlayıcısına dönüştü. Her zaman kalite ve müşteri memnuniyetine odaklandık.",
      About_Mission_Vision_Title: "Misyonumuz ve Vizyonumuz",
      About_Mission_Vision_Description:
        "Misyonumuz, müşterilerimizin hayatını geliştiren yenilikçi ve güvenilir elektronik çözümleri sunmaktır. Vizyonumuz, dünya çapında en güvenilir ve tercih edilen LED ekranlar ve aydınlatma çözümleri sağlayıcısı olmaktır.",
      About_Values_Title: "Değerlerimiz",
      About_Values_Description:
        "Bütünlük, yenilik ve müşteri memnuniyeti değerlerimizin merkezindedir. Müşterilerimiz ve iş ortaklarımızla uzun vadeli ilişkiler kurmaya inanıyoruz.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr", // Varsayılan dil
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
