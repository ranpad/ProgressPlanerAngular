import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeightData {
  userId: number;
  validFrom: number[];
  weight: number;
}
