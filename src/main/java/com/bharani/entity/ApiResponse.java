package com.bharani.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApiResponse {

    @JsonProperty("conversion_rate")
    private double conversionRate;

    public double getConversionRate() {
        return conversionRate;
    }
}
