package com.compusama.kotlinudemydelivery.activities

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import com.compusama.kotlinudemydelivery.R

class MainActivity : AppCompatActivity() {
    var ImageViewGoToRegister: ImageView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        ImageViewGoToRegister = findViewById(R.id.imageview_go_to_register)
        ImageViewGoToRegister?.setOnClickListener { goToRegister() }
    }
    private fun goToRegister(){
        val i = Intent(this,RegisterActivity::class.java)
        startActivity(i)
    }
}