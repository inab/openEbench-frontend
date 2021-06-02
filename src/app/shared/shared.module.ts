import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export class SharedModule {}

export const sharedModules = [
  NgModule,
  CommonModule,
  FormsModule,
  BrowserModule,
  HttpClientModule,
];
