import { z } from 'zod';

const topicsTuple = ['subscription', 'one-time', 'question'] as const;

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Имя должно содержать минимум 2 символа' }),
  phone: z.string().refine(
    (val) => {
      const digits = val.replace(/\D/g, '');
      // Белорусские номера: 375 + (29, 33, 44, 25, 17) + 7 цифр = 12 цифр
      return /^375(29|33|44|25|17)\d{7}$/.test(digits);
    },
    {
      message: 'Укажите корректный белорусский номер: +375 (XX) XXX-XX-XX',
    },
  ),
  // Меняем required_error на message
  topic: z.enum(topicsTuple, {
    message: 'Выберите тему',
  }),
  comment: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;
