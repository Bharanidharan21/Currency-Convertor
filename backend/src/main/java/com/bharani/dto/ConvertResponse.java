package com.bharani.dto;

public class ConvertResponse {
    private double convertedAmount;

    public ConvertResponse(double convertedAmount) {
        this.convertedAmount = convertedAmount;
    }

    public double getConvertedAmount() {
        return convertedAmount;
    }

    public void setConvertedAmount(double convertedAmount) {
        this.convertedAmount = convertedAmount;
    }
}
