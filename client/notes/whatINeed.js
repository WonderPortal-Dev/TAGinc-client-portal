// what I need

const user = {
  _id: '',
  name: '',
  isCompanyAdmin: 'boolean',
  company: '',
  companySubscription: '',
  devices: [
    // -> Specific to the user
    {
      deviceType: '',
      deviceName: '',
      deviceDescription: '',
      deviceServices: [
        {
          serviceId: '',
          serviceName: '',
          serviceDescription: '',
        },
      ],
    },
  ],
  baseServices: [
    // -> Specific to the user
    {
      serviceId: '',
      serviceName: '',
      serviceDescription: '',
    },
  ],
  tickets: [
    // -> Specific to the user
    { ticketid: '' },
  ],
};

const admin = {
  _id: '',
  companys: [
    // -> all in the database
    [company._id, company.name],
  ],
  users: [
    // -> all in the database
    [company._id, user._id, user.name],
  ],
  services: [
    // -> all in the database
    {
      serviceTypeId: '',
      serviceTypeName: '', //  i.e. => Install hardware/base service/cloud services
      subServices: [], // for example ['Office 365', 'Azure', 'Virtual Server/Desktop']
    },
  ],
  tickets: [
    // -> all in the database
    {
      ticketid,
      ticketType,
      companyId,
      userId,
      ticketStatus: '', // open, pending, closed
      ticketDetails: {
        // list of key values pairs based on the ticketType
      },
    },
  ],
};
