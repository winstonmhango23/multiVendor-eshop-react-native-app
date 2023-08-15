import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TableRow {
  id: number;
  productName: string;
  price: number;
}

interface TableProps {
  data: TableRow[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      {/* Table Header */}
      <View style={styles.headerRow}>
        <View style={[styles.column, styles.indexColumn]}>
          <Text style={styles.headerText}>#</Text>
        </View>
        <View style={[styles.column, styles.productColumn]}>
          <Text style={styles.headerText}>Product Name</Text>
        </View>
        <View style={[styles.column, styles.priceColumn]}>
          <Text style={styles.headerText}>Price</Text>
        </View>
      </View>

      {/* Table Rows */}
      {data.map((row, index) => (
        <View key={row.id} style={styles.dataRow}>
          <View style={[styles.column, styles.indexColumn]}>
            <Text style={styles.cellText}>{index + 1}</Text>
          </View>
          <View style={[styles.column, styles.productColumn]}>
            <Text style={styles.cellText}>{row.productName}</Text>
          </View>
          <View style={[styles.column, styles.priceColumn]}>
            <Text style={styles.cellText}>${row.price.toFixed(2)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    // backgroundColor: '#f0f0f0',
    // backgroundColor: '#007bff',
    backgroundColor: '#FF0060',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  indexColumn: {
    flex: 0.6,
  },
  productColumn: {
    flex: 1.8,
  },
  priceColumn: {
    flex: 1.2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffff',
  },
  cellText: {
    fontSize: 14,
  },
});

export default Table;
