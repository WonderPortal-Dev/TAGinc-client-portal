//database map

const companys = {
  _id: 'idObject',
  name: '',
  subscriptionLvl: subscriptionID,
  locations: [''],
  phoneNumber: '',
  users: [user_id],
  devices: [devices_id],
  baseServices: [baseServicesId],
};

const locations = {
  _id: 'idObject',
  name: '',
  locations: '',
  phoneNumber: '',
  users: [user_id],
  devices: [devices_id],
};

const users = {
  _id: 'idObject',
  name: String,
  company: companyId,
  phoneNumber: '',
  location: locationId,
  devices: [devices_id],
  appliedBaseServices: [baseServicesId],
};

const devices = {
  _id: 'idObject',
  name: String,
  company: companyId,
  location: locationId,
  users: [user_id],
  type: deviceTypeID,
  appliedServices: [deviceTypeServiceId],
};

const deviceType = {
  _id: 'idObject',
  name: '',
  description: '',
};

const deviceTypeTABLE = [
  {
    _id: '1',
    name: 'DataBase',
    description: 'Some Database description',
  },
  {
    _id: '2',
    name: 'Desktop',
    description: 'Some Desktop description',
  },
  {
    _id: '3',
    name: 'Router',
    description: 'Some Router description',
  },
];

const databaseServices = {
  _id: 'idObject',
  serviceName: '',
};

const databaseServicesTABLE = [
  {
    _id: '1',
    serviceName: 'service 1',
  },
  {
    _id: '2',
    serviceName: 'service 2',
  },
  {
    _id: '3',
    serviceName: 'service 3',
  },
];

const deviceJoinService = {
  device: deviceTypeId,
  service: serviceTypeId,
};

const deviceJoinServiceTABLE = [
  {
    device: '1',
    service: '2',
  },
];
