import React from 'react';

interface City {
  name: string;
  temperature: number;
  humidity: number;
  weather: string;
}

const CityCard: React.FC = () => {
  const [city, setCity] = React.useState<City>({
    name: 'Москва',
    temperature: 10,
    humidity: 60,
    weather: 'Облачно',
  });

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">{city.name}</h2>
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600">Температура:</p>
          <p className="text-lg font-bold">{city.temperature}°C</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Влажность:</p>
          <p className="text-lg font-bold">{city.humidity}%</p>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600">Погода:</p>
          <p className="text-lg font-bold">{city.weather}</p>
        </div>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCity({ ...city, temperature: city.temperature + 1 })}
      >
        Увеличить температуру
      </button>
    </div>
  );
};

export default CityCard;