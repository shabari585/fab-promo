import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { FlipkartCouponsComponent } from './flipkart-coupons/flipkart-coupons.component';
import { HeaderComponent } from './header/header.component';
import { DealsComponent } from './deals/deals.component';
import { CategoriesComponent } from './categories/categories.component';
import { BlogArticlesComponent } from './blog-articles/blog-articles.component';
import { CashonMobilesComponent } from './cashon-mobiles/cashon-mobiles.component';
import { UpcomingMobilesComponent } from './upcoming-mobiles/upcoming-mobiles.component';
import { EditorDealTestComponent } from './editor-deal-test/editor-deal-test.component';
import { CategoriesMobileComponent } from './categories-mobile/categories-mobile.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flipkart-coupons',
    component: FlipkartCouponsComponent
  },
  {
    path: 'deals',
    component: DealsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'editor-deal-test',
    component: EditorDealTestComponent
  },
  {
    path: 'category-mobile',
    component: CategoriesMobileComponent
  },
  {
    path: 'blog-articles',
    component: BlogArticlesComponent,
    children: [
        {
            path: '',
            redirectTo: 'blog',
            pathMatch: 'full',
        },
        {
          path: 'blog',
          component: BlogComponent
          
      },
      {
        path: 'cash',
        component: CashonMobilesComponent
        
    },
    {
      path: 'upcoming-mobiles',
      component: UpcomingMobilesComponent
      
  },
      ]
    },
  
]


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    FlipkartCouponsComponent,
    HeaderComponent,
    DealsComponent,
    CategoriesComponent,
    BlogArticlesComponent,
    CashonMobilesComponent,
    UpcomingMobilesComponent,
    EditorDealTestComponent,
    CategoriesMobileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
