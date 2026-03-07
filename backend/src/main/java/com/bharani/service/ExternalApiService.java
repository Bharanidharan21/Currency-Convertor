package com.bharani.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bharani.entity.ApiResponse;

@Service
public class ExternalApiService {

    private final RestTemplate restTemplate = new RestTemplate();

    private static final String API_KEY = "c6c1bdc4be04fa9d761a5b2b";

    public double getRate(String from, String to) {

        String url = "https://v6.exchangerate-api.com/v6/"
                + API_KEY
                + "/pair/"
                + from
                + "/"
                + to;

        ApiResponse response = restTemplate.getForObject(url, ApiResponse.class);

        if (response == null || response.getConversionRate() == 0) {
            throw new RuntimeException("Invalid currency code");
        }

        return response.getConversionRate();
    }
}


