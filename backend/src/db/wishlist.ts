import mongoose from 'mongoose'

const WishlistSchema = new mongoose.Schema({
    wishlist_id: { type: String, required: true },
    items: 
    {
      product_id: { type: String, required: true },
      product_name: { type: String, required: true },
      product_category: { type: String, required: true },
      product_amount: { type: String, required: true },
      product_quantity: { type: String, required: true },
      product_imageUrl: { type: String, required: true },
      status: { type: String, enum: ['inCart', 'processed', 'shipped'], default: 'inCart' },
    },
  created_at: { type: Date, default: Date.now },
  status: {type: String, required: true}
})

export const WishlistModel = mongoose.model('Wishlist', WishlistSchema)

export const getWishlists = () => WishlistModel.find();
export const getWishlistByID = (id: string) => WishlistModel.findById(id);
export const createWishlist = (values: Record<string, any>) => new WishlistModel(values)
    .save().then((user: any) => user.toObject())
export const deleteWishlistById = (id: string) => WishlistModel.findByIdAndDelete(id)