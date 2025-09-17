import './App.css'
import Profile from './Profile.jsx'

function App() {
  var users = [
  {
    name: "Тарас Шевченко",
    role: "Поет, художник",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Taras_Shevchenko_-_portrait_by_Ivan_Kramskoi.jpg",
  },
  {
    name: "Леся Українка",
    role: "Письменниця, громадська діячка",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lesya_Ukrainka_portrait.jpg/250px-Lesya_Ukrainka_portrait.jpg",
  },
  {
    name: "Іван Франко",
    role: "Письменник, філософ",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/%D0%86%D0%B2%D0%B0%D0%BD_%D0%AF%D0%BA%D0%BE%D0%B2%D0%B8%D1%87_%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%BE.jpg/250px-%D0%86%D0%B2%D0%B0%D0%BD_%D0%AF%D0%BA%D0%BE%D0%B2%D0%B8%D1%87_%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%BE.jpg",
  },
  {
    name: "Михайло Грушевський",
    role: "Історик, політик",
    avatarUrl: "https://www.oa.edu.ua/assets/images/n/2012/big/grushevsky_b.jpg",
  },
  {
    name: "Богдан Хмельницький",
    role: "Гетьман Війська Запорозького",
    avatarUrl: "https://www.museumsun.org/media/person_images/22_etsy_com_bogdan_hmel_1-kopyya-768x500.jpg",
  },
  {
    name: "Григорій Сковорода",
    role: "Філософ, просвітитель",
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%B8%D0%B9_%D0%A1%D0%BA%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D0%B4%D0%B0.jpg",
  },
  {
    name: "Петро Конашевич-Сагайдачний",
    role: "Гетьман козацький",
    avatarUrl: "https://zbruc.eu/sites/default/files/sagaydachnyy.png",
  },
];
  return (
    <div className="App">
      <h1>User Profiles</h1>
      <div className="profiles">
        {users.map((user, index) => (
          <Profile
            key={index}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
