package com.optic.kotlinudemydelivery.activities.client.address.create


import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.EditText
import androidx.appcompat.widget.Toolbar
import androidx.core.content.ContextCompat
import com.optic.kotlinudemydelivery.R
//import com.optic.kotlinudemydelivery.activities.client.address.map.ClientAddressMapActivity

class ClientAddressCreateActivity : AppCompatActivity() {

    var toolbar: Toolbar? = null
    var editTextRefPoint: EditText? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_client_address_create)

        toolbar = findViewById(R.id.toolbar)
        editTextRefPoint = findViewById(R.id.edittext_ref_point)

        toolbar?.setTitleTextColor(ContextCompat.getColor(this, R.color.black))
        toolbar?.title = "Nueva direccion"
        setSupportActionBar(toolbar)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

       // editTextRefPoint?.setOnClickListener { goToAddressMap() }
    }

    /* fun goToAddressMap() {
        val i = Intent(this, ClientAddressMapActivity::class.java)
        startActivity(i)
    }*/
}