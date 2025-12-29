package com.bharani.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.bharani.dto.ConvertResponse;
import com.bharani.entity.ConversionHistory;
import com.bharani.service.CurrencyService;
@RestController
@RequestMapping("/api")


public class CurrencyController {

    @Autowired
    private CurrencyService currencyService;

    // Convert currency
    @PostMapping("/convert")
    public ConvertResponse convert(
            @RequestParam String from,
            @RequestParam String to,
            @RequestParam double amount) {

        ConversionHistory history = currencyService.convert(from, to, amount);
        return new ConvertResponse(history.getConvertedAmount());
    }

    // ✅ View history
    @GetMapping("/history")
    public List<ConversionHistory> getHistory() {
        return currencyService.getHistory();
    }
}

