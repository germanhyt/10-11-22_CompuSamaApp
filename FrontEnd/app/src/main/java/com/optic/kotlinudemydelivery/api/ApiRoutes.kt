package com.optic.kotlinudemydelivery.api

import com.optic.kotlinudemydelivery.routes.UsersRoutes

class ApiRoutes {

    val API_URL = "http://192.168.18.4:3000/api/"
    val retrofit = RetrofitClient()

    fun getUsersRoutes(): UsersRoutes{
        return retrofit.getClient(API_URL).create(UsersRoutes::class.java)
    }

}