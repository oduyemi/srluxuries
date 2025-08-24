import { NextRequest } from "next/server";
import formidable from "formidable";


export function parseForm(req: NextRequest): Promise<{ fields: any; files: any }> {
  const form = formidable({ multiples: true });
  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}
