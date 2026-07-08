import { pgTable, text, timestamp, boolean, serial, integer, decimal, unique } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Better Auth Tables
export const user = pgTable('user', {
  id: text('id').primaryKey(),
  email: text('email').unique().notNull(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  name: text('name'),
  image: text('image'),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updatedAt', { withTimezone: true }).notNull().defaultNow(),
});

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  expiresAt: timestamp('expiresAt', { withTimezone: true }).notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updatedAt', { withTimezone: true }).notNull().defaultNow(),
});

export const account = pgTable(
  'account',
  {
    id: text('id').primaryKey(),
    userId: text('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    type: text('type').notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refreshToken: text('refreshToken'),
    accessToken: text('accessToken'),
    expiresAt: integer('expiresAt'),
    createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updatedAt', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [unique('provider_providerAccountId').on(table.provider, table.providerAccountId)],
);

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt', { withTimezone: true }).notNull(),
  createdAt: timestamp('createdAt', { withTimezone: true }),
  updatedAt: timestamp('updatedAt', { withTimezone: true }),
});

// App Tables
export const team = pgTable('team', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  role: text('role').notNull(),
  bio: text('bio'),
  image: text('image'),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
});

export const gallery = pgTable('gallery', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  image: text('image').notNull(),
  category: text('category').notNull(),
  order_index: integer('order_index').default(0),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
});

export const cottage = pgTable('cottage', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  image: text('image').notNull(),
  amenities: text('amenities'),
  capacity: integer('capacity'),
  pricePerNight: decimal('pricePerNight', { precision: 10, scale: 2 }),
  order_index: integer('order_index').default(0),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
});

export const package_table = pgTable('package', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  duration: integer('duration'),
  price: decimal('price', { precision: 10, scale: 2 }),
  itinerary: text('itinerary'),
  image: text('image'),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
});

export const blog = pgTable('blog', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').unique().notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  featured_image: text('featured_image'),
  author: text('author'),
  published: boolean('published').default(true),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updatedAt', { withTimezone: true }).notNull().defaultNow(),
});

export const uganda_attraction = pgTable('uganda_attraction', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  image: text('image'),
  location: text('location'),
  best_season: text('best_season'),
  order_index: integer('order_index').default(0),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
});

export const outreach = pgTable('outreach', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  image: text('image'),
  impact: text('impact'),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
});

export const contact_message = pgTable('contact_message', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  status: text('status').default('new'),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
});

export const donation = pgTable('donation', {
  id: serial('id').primaryKey(),
  donor_name: text('donor_name').notNull(),
  donor_email: text('donor_email').notNull(),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  currency: text('currency').default('USD'),
  stripe_payment_id: text('stripe_payment_id'),
  status: text('status').default('pending'),
  message: text('message'),
  createdAt: timestamp('createdAt', { withTimezone: true }).notNull().defaultNow(),
});

// Relations
export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));
