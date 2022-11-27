package com.optic.kotlinudemydelivery.routes

import com.optic.kotlinudemydelivery.models.ResponseHttp
import com.optic.kotlinudemydelivery.models.User
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST

interface UsersRoutes {

    @POST( "users/create")
    fun register(@Body user: User): Call<ResponseHttp>
}