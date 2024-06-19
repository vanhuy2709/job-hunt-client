export { };
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {

  interface ILocation {
    _id: string;
    name: string;
    createdBy: {
      _id: string;
      email: string;
    },
    deletedAt: Date,
    isDeleted: boolean,
    createdAt: Date;
    updatedAt: Date;
  }

  interface IWorkType {
    _id: string;
    name: string;
    createdBy: {
      _id: string;
      email: string;
    },
    deletedAt: Date;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  interface ILevel {
    _id: string;
    name: string;
    createdBy: {
      _id: string;
      email: string;
    },
    deletedAt: Date,
    isDeleted: boolean,
    createdAt: Date,
    updatedAt: Date,
  }

  interface IPermission {
    _id: string;
    name: string;
    apiPath: string;
    method: string;
    module: string;
  }

  interface ISkill {
    _id: string,
    name: string,
    createdBy: {
      _id: string,
      email: string
    },
    deletedAt: null,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    updatedBy: {
      _id: string,
      name: string
    }
  }

  interface IHistory {
    status: string,
    updatedAt: string,
    updatedBy: {
      _id: string,
      email: string
    }
  }

  interface IResume {
    _id: string,
    email: string,
    userId: string,
    url: string,
    status: string,
    companyId: {
      _id: string;
      name: string;
      logo: string;
    },
    jobId: {
      _id: string;
      name: string;
      salary: number;
    },
    history: IHistory[],
    createdBy: {
      _id: string,
      email: string
    },
    deletedAt: string,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
  }

  interface IUser {
    _id: string,
    name: string,
    email: string,
    age: number,
    gender: string,
    address: string,
    role: {
      _id: string,
      name: string
    },
    deletedAt: string,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string,
    refreshToken: string
  }

  interface IJob {
    _id: string,
    name: string,
    skills: string[],
    company: {
      _id: string,
      name: string,
      logo: string
    },
    location: string,
    salary: number,
    quantity: number,
    level: string,
    description: string,
    startDate: string,
    endDate: string,
    isActive: boolean,
    createdBy: {
      _id: string,
      email: string
    },
    isDeleted: boolean,
    deletedAt: string,
    createdAt: string,
    updatedAt: string,
  }

  interface ICompany {
    _id: string,
    name: string,
    address: string,
    description: string,
    logo: string,
    createdBy: {
      _id: string,
      email: string
    },
    isDeleted: boolean,
    deletedAt: string,
    createdAt: string,
    updatedAt: string,
  }

  interface IManage {
    _id: string;
    jobTitle: string;
    dateInterview: string;
    email: string;
    name: string;
    linkMeet: string;
    urlCV: string;
    userIdInterviewer: string;
    userIdCandidate: string;
    createdBy: {
      _id: string;
      email: string;
    },
    deletedAt: Date;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
  }

  interface IRequest {
    url: string;
    method: string;
    body?: { [key: string]: any };
    queryParams?: any;
    useCredentials?: boolean;
    headers?: any;
    nextOption?: any;
  }

  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
  }

  interface IModelPaginate<T> {
    meta: {
      current: number;
      pageSize: number;
      pages: number;
      total: number;
    },
    result: T[]
  }
}
