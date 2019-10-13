const db = [
  {
    id: 1,
    name: 'Вася Пупкин',
    email: 'vasia@gmail.com',
    phone: '89997776677',
    region: 'Moscow',
    isactive: 1
  },
  {
    id: 2,
    name: 'Елена Головач',
    email: 'elena@gmail.com',
    phone: '85557776677',
    region: 'Saratov',
    isactive: 1
  },
  {
    id: 3,
    name: 'Иван Иванов',
    email: 'ivan@gmail.com',
    phone: '88895541751',
    region: 'St Petersburg',
    isactive: 1
  }
];

exports.isActive = (id) => {
    var manager = db.filter(function(item) {
      return item.id == id && item.isactive == 1;
    });

    return manager.length>0 ? manager[0] : false;
}

exports.findByRegion = (region) => {

  
    var manager = db.filter(function(item) {
      return item.region == region && item.isactive == 1;
    });

    return manager.length>0 ? manager[0] : false;
  

};