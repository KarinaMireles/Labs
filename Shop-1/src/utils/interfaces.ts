import { NextFunction } from "connect";
import { Request, Response } from "express";
import { ObjectId } from "mongoose";

export interface reqRes {
  (req: Request, res: Response): Promise<void>;
}

export interface reqResNext {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

export interface Product {
  _id: ObjectId;
  name: string;
  price: number;
  photoURL: string;
}
