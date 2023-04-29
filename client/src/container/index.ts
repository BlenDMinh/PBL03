import { Container } from 'inversify';

import { TYPES } from '@/types';
import { ICustomerService } from '@/services/ICustomerService';
import { CustomerService } from '@/services/implement/CustomerService';
import { ICategoryService } from '@/services/ICategoryService';
import { CategoryService } from '@/services/implement/CategoryService';
import { IProductService } from '@/services/IProductService';
import { ProductService } from '@/services/implement/ProductService';

const appContainer = new Container();

appContainer.bind<ICustomerService>(TYPES.CustomerService).to(CustomerService);
appContainer.bind<ICategoryService>(TYPES.CategoryService).to(CategoryService);
appContainer.bind<IProductService>(TYPES.ProductService).to(ProductService);

export { appContainer };

