// pages/api/sendSms.js

export default async function handler(req: { method: string; body: { service: any; date: any; time: any; firstName: any; lastName: any; email: any; phone: any; address: any; aptSuite: any; city: any; state: any; zipCode: any; preferredContact: any; accessInfo: any; parking: any; referral: any; cleaningRecommendation: any; flexibleTime: any; comments: any; selectedPacks: any; total: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; success?: boolean; data?: any; }): void; new(): any; }; }; }) {
   console.log('Handler initiated');

   if (req.method !== 'POST') {
      console.error('Invalid request method:', req.method);
      return res.status(405).json({ error: 'Method not allowed' });
   }

   const {
      service,
      date,
      time,
      firstName,
      lastName,
      email,
      phone,
      address,
      aptSuite,
      city,
      state,
      zipCode,
      preferredContact,
      accessInfo,
      parking,
      referral,
      cleaningRecommendation,
      flexibleTime,
      comments,
      selectedPacks,
      total,
   } = req.body;

   console.log('Request body:', req.body);

   const accountSid = process.env.TWILIO_ACCOUNT_SID;
   const authToken = process.env.TWILIO_AUTH_TOKEN;
   const toPhoneNumber = '+18777804236'; // Destinatário (exemplo)
   const fromPhoneNumber = '+15598887010'; // Remetente (exemplo)

   // Função para validar o formato E.164
   const validatePhoneNumber = (number: string) => {
      const e164Regex = /^\+?[1-9]\d{1,14}$/;
      return e164Regex.test(number);
   };

   if (!validatePhoneNumber(toPhoneNumber) || !validatePhoneNumber(fromPhoneNumber)) {
      console.error('Invalid phone number format');
      return res.status(400).json({ error: 'Invalid phone number format' });
   }

   const packsDetails = selectedPacks
      .map((pack: { name: any; value: any; }) => `${pack.name} - $${pack.value}`)
      .join(", ");

   const messageBody = `
   New Form Submitted!\n
   Service: ${service}\n
   Date: ${date}\n
   Time: ${time}\n
   Name: ${firstName} ${lastName}\n
   Email: ${email}\n
   Phone: ${phone}\n
   Address: ${address}, Apt/Suite: ${aptSuite}, City: ${city}, State: ${state}, Zip Code: ${zipCode}\n
   Preferred Contact: ${preferredContact}\n
   Access Info: ${accessInfo}\n
   Parking: ${parking}\n
   Referral: ${referral}\n
   Cleaning Recommendation: ${cleaningRecommendation}\n
   Flexible Time: ${flexibleTime}\n
   Comments: ${comments}\n
   Selected Packs: ${packsDetails}\n
   Total: $${total}
   `;

   console.log('Message body:', messageBody);

   const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
   const auth = Buffer.from(`${accountSid}:${authToken}`).toString('base64');

   const params = new URLSearchParams();
   params.append('To', toPhoneNumber);
   params.append('From', fromPhoneNumber);
   params.append('Body', messageBody);

   try {
      const response = await fetch(url, {
         method: 'POST',
         headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: params.toString(),
      });

      console.log('Request headers:', {
         'Authorization': `Basic ${auth}`,
         'Content-Type': 'application/x-www-form-urlencoded',
      });
      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (!response.ok) {
         const errorMessage = `Failed to send SMS, status code: ${response.status}`;
         console.error(errorMessage);
         throw new Error(errorMessage);
      }

      console.log('SMS sent successfully:', responseData);
      res.status(200).json({ success: true, data: responseData });
   } catch (error) {
      console.error('Error sending SMS: ', error);
      res.status(500).json({ error: 'Failed to send SMS' });
   }
}
