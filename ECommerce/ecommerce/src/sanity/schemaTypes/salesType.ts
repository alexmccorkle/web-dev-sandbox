import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const salesType = defineType({
  name: 'sale',
  title: 'Sales',
  type: 'document', 
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string', 
      title: 'Sale Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Sales Description',
    }),
    defineField({
      name: 'discountAmount',
      type: 'number',
      title: 'Discount Amount',
      description: 'The amount of discount in percentage',
    }),

    defineField({
      name: 'couponCode',
      type: 'string',
      title: 'Coupon Code',
    }),

    defineField({
      name: 'ValidFrom',
      type: 'datetime',
      title: 'Valid From',
    }),
    defineField({
      name: 'ValidTo',
      type: 'datetime',
      title: 'Valid To',
    }),
    defineField({
      name: 'isActive',
      type: 'boolean',
      title: 'Is Active',
      description: "Toggle to activate or deactivate the sale",
      initialValue: true,
    })
  ],
  preview: {
    select: {
      title: 'title',
      discountAmount: 'discountAmount',
      couponCode: 'couponCode',
      isActive: 'isActive',
  },
  prepare (selection) {
    const { title, discountAmount, couponCode, isActive } = selection
    return {
      title,
      subtitle: `Discount: ${discountAmount}% | Coupon Code: ${couponCode} | Active: ${isActive ? 'Yes' : 'No'}`,
    }
  }
  },
});