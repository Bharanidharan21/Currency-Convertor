package com.bharani.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ConvertResponse {
    private double convertedAmount;
    private double rate;
	public ConvertResponse(double convertedAmount2, double rate2) {
		// TODO Auto-generated constructor stub
	}
	public double getConvertedAmount() {
		return convertedAmount;
	}
	public void setConvertedAmount(double convertedAmount) {
		this.convertedAmount = convertedAmount;
	}
	public double getRate() {
		return rate;
	}
	public void setRate(double rate) {
		this.rate = rate;
	}
    
}
