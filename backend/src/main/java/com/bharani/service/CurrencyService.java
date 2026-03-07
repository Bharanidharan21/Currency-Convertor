package com.bharani.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bharani.entity.ConversionHistory;
import com.bharani.repository.ConversionHistoryRepository;

@Service
public class CurrencyService {

    @Autowired
    private ExternalApiService externalApiService;

    @Autowired
    private ConversionHistoryRepository conversionHistoryRepository;

    public ConversionHistory convert(String from, String to, double amount) {

        double rate = externalApiService.getRate(from, to);
        double convertedAmount = amount * rate;

        ConversionHistory history = new ConversionHistory(
                from,
                to,
                amount,
                convertedAmount,
                rate
        );

        return conversionHistoryRepository.save(history);
    }

    // ✅ NEW METHOD
    public List<ConversionHistory> getHistory() {
        return conversionHistoryRepository.findAllByOrderByCreatedAtDesc();
    }
}


