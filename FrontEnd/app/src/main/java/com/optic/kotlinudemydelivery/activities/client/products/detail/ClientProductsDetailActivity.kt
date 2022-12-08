package com.optic.kotlinudemydelivery.activities.client.products.detail

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import com.denzcoskun.imageslider.ImageSlider
import com.denzcoskun.imageslider.constants.ScaleTypes
import com.denzcoskun.imageslider.models.SlideModel
import com.google.gson.Gson
import com.optic.kotlinudemydelivery.R
import com.optic.kotlinudemydelivery.models.Product

class ClientProductsDetailActivity : AppCompatActivity() {

    var product: Product? = null
    val gson = Gson()

    var imageSlider: ImageSlider? = null
    var textViewName: TextView? = null
    var textViewDescription: TextView? = null
    var textViewPrice: TextView? = null
    var textViewCounter: TextView? = null
    var imageViewAdd: ImageView? = null
    var imageViewRemove: ImageView? = null
    var buttonAdd: Button? = null

    var counter = 1
    var productPrice = 0.0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_client_products_detail)

        product = gson.fromJson(intent.getStringExtra("product"), Product::class.java)

        imageSlider = findViewById(R.id.imageslider)
        textViewName = findViewById(R.id.textview_name)
        textViewDescription= findViewById(R.id.textview_description)
        textViewPrice= findViewById(R.id.textview_price)
        textViewCounter= findViewById(R.id.textview_counter)
        imageViewAdd= findViewById(R.id.imageview_add)
        imageViewRemove= findViewById(R.id.imageview_remove)
        buttonAdd= findViewById(R.id.btn_add_product)

        val imageList = ArrayList<SlideModel>()
        imageList.add(SlideModel(product?.image1, ScaleTypes.CENTER_CROP))
        imageList.add(SlideModel(product?.image2, ScaleTypes.CENTER_CROP))
        imageList.add(SlideModel(product?.image3, ScaleTypes.CENTER_CROP))

        imageSlider?.setImageList(imageList)

        textViewName?.text = product?.name
        textViewDescription?.text = product?.description
        textViewPrice?.text = "${product?.price}$"

        imageViewAdd?.setOnClickListener { addItem() }
        imageViewRemove?.setOnClickListener{ removeItem()}

    }

    private fun addItem() {
        counter = counter + 1
        productPrice = product?.price!! * counter
        product?.quantity = counter
        textViewCounter?.text = "${product?.quantity}"
        textViewPrice?.text = "${productPrice}"
    }

    private fun removeItem() {

        if(counter > 1){
            counter = counter - 1
            productPrice = product?.price!! * counter
            product?.quantity = counter
            textViewCounter?.text = "${product?.quantity}"
            textViewPrice?.text = "${productPrice}"
        }

    }
}