/* а) Используйте прототипное наследование.
б) Базовый класс должен состоять из минимум 6 различных свойств.
в) Каждый класс - наследник должен расширять базовый класс и включать два или более дополнительных свойства.
г) Каждый класс - наследник должен унаследовать как минимум 1 метод из родительского класса. Также добавьте по одному уникальному методу каждому классу наследнику.


Класс «Растение». Наследуемые классы: папоротник и ель обыкновенная. Возможные поля: название title, описание description, вид view, возраст age, класс class, размер соцветия inflorescence size, класс опасности hazard class, ареал произрастания area of growth, область применения scope of application(в пищевой промышленности, в получении лекарственных препаратов, в сельском хозяйстве...), первооткрыватель the discoverer, место произрастания place of growth и т.д. */


function Plant1(title, description, view, age, clas, inflorescenceSize) {
   this.title = title;
   this.description = description;
   this.view = view;
   this.age = age;
   this.clas = clas;
   this.inflorescenceSize = inflorescenceSize;
}
Plant1.prototype.getInfo = function () {
   return 'Название растения: ' + this.title + ", " + "описание: " + this.description + ", " + "вид: " + this.view + ", " + "возраст: " + this.age + ", " + "класс: " + this.clas + ", " + "размер соцветия: " + this.inflorescenceSize + ". ";
}
Plant1.prototype.getDescriptionAndTitle = function () {
   return "Краткое описание: " + (this.title).toLowerCase() + " - это " + (this.description).toLowerCase() + ".";
}

function Plant2(title, description, view, age, clas, inflorescenceSize, hazardClas, areaOfGrowth) {
   Plant1.call(this, title, description, view, age, clas, inflorescenceSize);
   this.hazardClas = hazardClas;
   this.areaOfGrowth = areaOfGrowth;
}
// Прописываем наследование методов
Plant2.prototype = Object.create(Plant1.prototype);

Plant2.prototype.getTitleHazardClas = function () {
   return this.title + " " + (this.hazardClas).toLowerCase() + ".";
}
Plant2.prototype.getAreaOfGrowth = function () {
   return "Дополнительная информация по ареалу произрастания: " + this.areaOfGrowth + ".";
}
function Plant3(title, description, view, age, clas, inflorescenceSize, hazardClas, areaOfGrowth, izUsed, theDiscovered) {
   Plant2.call(this, title, description, view, age, clas, inflorescenceSize, hazardClas, areaOfGrowth);
   this.izUzed = izUsed;
   this.theDiscovered = theDiscovered;
}
Plant3.prototype = Object.create(Plant2.prototype);
Plant3.prototype.getAdditionallyInfo = function () {
   return "Дополнительная информация. " + "Используется: " + (this.izUzed).toLowerCase() + ". " + "Первооткрыватель: " + (this.theDiscovered).toLowerCase() + ".";
}
Plant3.prototype.getTitleIzUsed = function () {
   return "Где используется растение? " + this.title + " используется " + (this.izUzed).toLowerCase() + ".";
}
Plant3.prototype.getAddInfo = function () {
   return " Высота достигает: " + this.inflorescenceSize + ". " + "Опасна ли сосна? " + this.hazardClas + ".";
}


var plant = new Plant1('Роза', 'Красный цветок с шипами на стебле', 'Дамасская', 'Три года', 'Альба', '6-7 см');
var plant2 = new Plant2('Виноград', 'Сладкие белые ягоды', 'Грузинский', 'Пять лет', 'Ркацители', '3-5 см', 'Не опасна', 'Передняя_Азия');
var plant3 = new Plant3('Сосна', 'Дерево остистое межгорное', 'Ламберта', 'до 5000 лет', '-', '82 м', "Не опасна", "Северная Америка", "В строительстве", "Петикантроп");
// console.log(plant.getInfo());
// console.log(plant.getDescriptionAndTitle());
// console.log(plant2.getInfo());
// console.log(plant2.getDescriptionAndTitle());
// console.log(plant2.getTitleHazardClas());
// console.log(plant2.getAreaOfGrowth());
// console.log(plant3.getInfo());
// console.log(plant3.getDescriptionAndTitle());
// console.log(plant3.getAdditionallyInfo());
// console.log(plant3.getTitleIzUsed());
// console.log(plant3.getAreaOfGrowth() + plant3.getAddInfo());

function Laptop(name, model, serialNumber, yearOfManufacture, ramSize, romSize, mass, drive, webcam, amountOfRam, amountOfRom) {
   this.name = name;
   this.model = model;
   this.serialNumber = serialNumber;
   this.yearOfManufacture = yearOfManufacture;
   this.ramSize = ramSize;
   this.romSize = romSize;
   this.mass = mass;
   this.drive = drive;
   this.webcam = webcam;
   this.amountOfRam = amountOfRam;
   this.amountOfRom = amountOfRom;
}
Laptop.prototype.getRamSizeAndRomSize = function () {
   return "У данного устройства колличество ОЗУ: " + this.amountOfRam + ". " + "У данного устройства колличество ПЗУ: " + this.amountOfRom + ".";
}
Laptop.prototype.getNameAndModel = function () {
   return "Устройство: " + this.name + ", модель:" + this.model + ".";
}
function Ultrabook(name, model, serialNumber, yearOfManufacture, ramSize, romSize, mass, drive, webcam) {
   Laptop.call(this, name, model, serialNumber, yearOfManufacture, ramSize, romSize, mass, drive, webcam)
}
Ultrabook.prototype = Object.create(Laptop.prototype);
Ultrabook.prototype.getNameMassYearOfManufacture = function () {
   return "Устройство: " + (this.name).toLowerCase() + ", вес: " + (this.mass).toLowerCase() + ", год изготовления: " + (this.yearOfManufacture).toLowerCase() + ".";
}
Ultrabook.prototype.getRamSizeAndRomSize = function () {
   return "У данного устройства размер ОЗУ: " + this.ramSize + ". " + "У данного устройства размер ПЗУ: " + this.romSize + ".";
}


var laptop = new Laptop("Lenovo", "IdeaPad 3", "82H800KRRE", "2021", "12Gb", "512Gb", "1650 g.", "Отсутствует", "Присутствует", "2", "1");
var ultrabook = new Ultrabook("Honor", "MagicBook X15", "BBR- WAH9", "2022", "16Gb", "1024Gb", "620 g.", "Отсутствует", "Присутствует");

console.log(laptop.getRamSizeAndRomSize());
console.log(laptop.getNameAndModel());
console.log(ultrabook.getRamSizeAndRomSize());
console.log(ultrabook.getNameMassYearOfManufacture());
console.log(ultrabook.getNameAndModel());



