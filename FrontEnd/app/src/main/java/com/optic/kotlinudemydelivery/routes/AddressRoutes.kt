package com.optic.kotlinudemydelivery.routes

import com.optic.kotlinudemydelivery.models.Address
import com.optic.kotlinudemydelivery.models.Category
import com.optic.kotlinudemydelivery.models.ResponseHttp
import com.optic.kotlinudemydelivery.models.User
import okhttp3.MultipartBody
import okhttp3.RequestBody
import retrofit2.Call
import retrofit2.http.*

interface AddressRoutes {

    @GET("address/findByUser/{id_user}")
    fun getAddress(
        @Path("id_user") idUser: String,
        @Header("Authorization") token: String
    ): Call<ArrayList<Address>>

    @POST("address/create")
    fun create(
        @Body address: Address,
        @Header("Authorization") token: String
    ): Call<ResponseHttp>


}