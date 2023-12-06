import { addDoc, collection } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../firebase';

export default async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method === 'POST') {
      const { userName, userPhone, userSegment, userEmail, companyName, companyRevenue, employeeCount } = req.body;

      try {
         const docRef = await addDoc(collection(db, 'LEADS'), {
            name: userName,
            phone: userPhone,
            segment: userSegment,
            email: userEmail,
            companyName,
            revenue: companyRevenue,
            employeeCount
         });

         res.status(200).json({ success: true, message: 'Lead salvo com sucesso', id: docRef.id });
      } catch (error) {
         console.error('Erro ao salvar o lead:', error);
         res.status(500).json({ success: false, message: 'Erro ao salvar o lead' });
      }
   } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} Não Permitido`);
   }
};
