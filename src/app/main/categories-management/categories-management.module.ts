import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesManagementRoutingModule } from './categories-management-routing.module';
import { CategoriesManagementPageComponent } from './categories-management-page/categories-management-page.component';
import { CategoriesManagementFormComponent } from './categories-management-form/categories-management-form.component';
import {IconModule} from "@coreui/icons-angular";
import {ButtonModule, CardModule, FormModule, GridModule, TableModule} from "@coreui/angular";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';


@NgModule({
  declarations: [
    CategoriesManagementPageComponent,
    CategoriesManagementFormComponent
  ],
  imports: [
    // StoreModule.forFeature('bidJointVentures', bidJointVentureReducers),
    // EffectsModule.forFeature(bidJointVentureEffects),
    // StoreModule.forFeature('eBiddingDocuments', bidDocumentsReducers),
    // EffectsModule.forFeature(bidDocumentsEffects),
    // StoreModule.forFeature('bidProposals', bidProposalReducers),
    // EffectsModule.forFeature(bidProposalEffects),
    CommonModule,
    CategoriesManagementRoutingModule,
    IconModule,
    TableModule,
    CardModule,
    GridModule,
    FormModule,
    ButtonModule,
    HttpClientModule
  ]
})
export class CategoriesManagementModule { }
