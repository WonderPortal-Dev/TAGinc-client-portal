// things I will send

const admin = () => {
  // Update services
  const updateServices = () => {
    return {};
  };
  // create new company accounts
  const newCompany = () => {
    return {};
  };
  // add new user accounts and assign devices and services
  const addUser = () => {
    return {};
  };
  // update company accounts
  const updateCompanyDetails = () => {
    return {};
  };

  // make tickets on behalf of users
  const makeTicket = () => {
    return {};
  };
  // resolve and respond to tickets
  // close tickets
  const editTicket = () => {
    return {};
  };
};

const user = () => {
  const makeTicket = () => {
    return {
      //data the user will send to server
      createdby: user._id,
      companyid: company._id,
      ticketType,
      ticketDetails: {
        // list of key values pairs based on the ticketType
      },
      ticketComments: [''],
    };
  };

  const updateTicket = (ticketId) => {
    return {
      //data the user will send to server
      createdby: user._id,
      ticketComments: [''],
      isPending: 'Boolean',
    };
  };
};

const userAdmin = () => {
  const requestAddUser = () => {
    return {
      //data the user will send to server
      // this will be a ticket and the admin will have to resolve
      name: '',
      company: companyId,
      phoneNumber: '',
      location: locationId,
      devices: [devices_id],
      appliedBaseServices: [baseServicesId],
    };
  };
  const makeTicket = () => {
    return {
      //data the user will send to server
      createdby: user._id,
      companyid: company._id,
      ticketType,
      ticketDetails: {
        // list of key values pairs based on the ticketType
      },
      ticketComments: [''],
    };
  };

  const updateTicket = (ticketId) => {
    return {
      //data the user will send to server
      createdby: user._id,
      ticketComments: [''],
      isPending: 'Boolean',
    };
  };
};
