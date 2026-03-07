package com.bharani.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bharani.entity.ConversionHistory;

public interface ConversionHistoryRepository
        extends JpaRepository<ConversionHistory, Long> {

    List<ConversionHistory> findAllByOrderByCreatedAtDesc();
}
