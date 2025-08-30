import type { Request, Response } from "express";

export function ping(_req: Request, res: Response) {
    return res.status(200).send('Backend is alive!');
}