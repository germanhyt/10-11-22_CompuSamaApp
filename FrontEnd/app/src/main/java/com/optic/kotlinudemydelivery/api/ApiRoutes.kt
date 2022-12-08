package com.optic.kotlinudemydelivery.api

import android.media.session.MediaSession.Token
import com.optic.kotlinudemydelivery.routes.AddressRoutes
import com.optic.kotlinudemydelivery.routes.CategoriesRoutes
import com.optic.kotlinudemydelivery.routes.ProductsRoutes
import com.optic.kotlinudemydelivery.routes.UsersRoutes

class ApiRoutes {

    val API_URL = "http://192.168.18.2:3000/api/"
    val retrofit = RetrofitClient()

    fun getUsersRoutes(): UsersRoutes{
        return retrofit.getClient(API_URL).create(UsersRoutes::class.java)
    }

    fun getUsersRoutesWithToken(token: String): UsersRoutes{
        return retrofit.getClientWithToken(API_URL,token).create(UsersRoutes::class.java)
    }

    fun getCategoriesRoutes(token: String): CategoriesRoutes {
        return retrofit.getClientWithToken(API_URL, token).create(CategoriesRoutes::class.java)
    }

    fun getAddressRoutes(token: String): AddressRoutes {
        return retrofit.getClientWithToken(API_URL, token).create(AddressRoutes::class.java)
    }

    fun getProductsRoutes(token: String): ProductsRoutes {
        return retrofit.getClientWithToken(API_URL, token).create(ProductsRoutes::class.java)
    }
}
